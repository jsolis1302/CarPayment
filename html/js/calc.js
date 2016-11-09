       <!--
        
        var vidrio = 0;
        var papel = 0;
        var envases = 0;
        var materiaorganica = 0;
        var pilas = 0;
        var aceites = 0;
        var pinturas = 0;
        
        // Todos los carecteres son numeros
        function EsNumero(Dato) {
            var CadenaNumeros="0123456789";
            var EsteCaracter;
            var Contador = 0;
        
            for (var i=0; i < Dato.length; i++) {
                EsteCaracter = Dato.substring(i, i+1);
                if (CadenaNumeros.indexOf(EsteCaracter) != -1) Contador ++;
            }
            if (Contador == Dato.length) return true;
            else return false;
        }
        
        function escribeMsg(campo,texto) {
                cambioTexto  = "document.all.item('"+campo+"').innerHTML = '" + texto + "'";
                eval (cambioTexto);
        }
        
        function comidas() {
            var personas = document.getElementById('PERSONASVIVENENCASA').value;
            var cantidad = document.getElementById('CANTIDADCOMIDAS').value;
            var tipo = document.getElementById('TIPODECOMIDA').value;
            variable = 0;
            if ((personas<=1)&&(cantidad>=1.2)){
                document.getElementById('habitoAlimenConsumo').value="1";
            }else if ((personas>=1.2)&&(cantidad<=0.8)){
                document.getElementById('habitoAlimenConsumo').value="2";
            }else{
                document.getElementById('habitoAlimenConsumo').value="3";
            }
        }
        
        function papeles1() {
            var periodicos = document.getElementById('PERIODICO').value;
            if ((periodicos==0.25)){
                document.getElementById('cataloPeriodRevistas').value=1;
            }else if ((periodicos==0.75)||(periodicos==1)){
                document.getElementById('cataloPeriodRevistas').value=2;
            }else if ((periodicos==1.25)){
                document.getElementById('cataloPeriodRevistas').value=3;
            }else if ((periodicos==2)){
                document.getElementById('cataloPeriodRevistas').value=4;
            }
        }
        function papeles2() {
            var catrevistas = document.getElementById('CATALOGOSYREVISTAS').value;
            if ((catrevistas==0.25)){
                document.getElementById('cataloPeriodRevistas').value=1;
            }else if ((catrevistas==0.75)||(catrevistas==1)){
                document.getElementById('cataloPeriodRevistas').value=2;
            }else if ((catrevistas==1.25)){
                document.getElementById('cataloPeriodRevistas').value=3;
            }else if ((catrevistas==2)){
                document.getElementById('cataloPeriodRevistas').value=4;
            }
        }
        
        function envasesCon() {
            var botellasdevidrio = document.getElementById('BOTELLASDEVIDRIO').value;
            var frascosdevidrio = document.getElementById('FRASCOSDEVIDRIO').value;
            var botellasdeplastico = document.getElementById('BOTELLASDEPLASTICO').value;
            var tarrosdeplastico = document.getElementById('TARROSDEPLASTICO').value;
            var bolsasdeplastico = document.getElementById('BOLSASDEPLASTICO').value;
            var latasdebebida = document.getElementById('LATASDEBEBIDA').value;
            var latasdeconserva = document.getElementById('LATASDECONSERVA').value;
            var bricks = document.getElementById('BRICKS').value;
            var minienvases = document.getElementById('MINIENVASES').value;
            var envasesparaalimentosfrescos = document.getElementById('ENVASESPARAALIMENTOSFRESCOS').value;
        
        
            if ((minienvases==0.7 && envasesparaalimentosfrescos==0.7)){
                document.getElementById('consumoDeEnvases').value=1;
            }else if ((minienvases==1 && envasesparaalimentosfrescos==1)){
                document.getElementById('consumoDeEnvases').value=2;
            }else if ((minienvases==1.2 && envasesparaalimentosfrescos==1.2)){
                document.getElementById('consumoDeEnvases').value=3;
            }else {
                document.getElementById('consumoDeEnvases').value=2;
            }
        
        }
        
        function separacion() {
        
            var array_separacion = new Array();
        
            if (document.getElementById('vidrio').checked) array_separacion['vidrio']=  1;
            else array_separacion['vidrio']=  0;
        
            if (document.getElementById('papel').checked) array_separacion['papel']=  1;
            else array_separacion['papel']=  0;
        
            if (document.getElementById('envases').checked) array_separacion['envases']=  1;
            else array_separacion['envases']=  0;
        
        
            if (document.getElementById('materiaorganica').checked) array_separacion['materiaorganica']=  1;
            else array_separacion['materiaorganica']=  0;
        
            if (document.getElementById('pilas').checked) array_separacion['pilas']=  1;
            else array_separacion['pilas']=  0;
        
            if (document.getElementById('aceites').checked) array_separacion['aceites']=  1;
            else array_separacion['aceites']=  0;
        
            if (document.getElementById('pinturas').checked) array_separacion['pinturas']=  1;
            else array_separacion['pinturas']=  0;
        
            if (document.getElementById('depoVidrio').checked) array_separacion['depoVidrio']=  1;
            else array_separacion['depoVidrio']=  0;
        
            if (document.getElementById('depoPapel').checked) array_separacion['depoPapel']=  1;
            else array_separacion['depoPapel']=  0;
        
            if (document.getElementById('depoEnvases').checked) array_separacion['depoEnvases']=  1;
            else array_separacion['depoEnvases']=  0;
        
            if (document.getElementById('depoMatOrganica').checked) array_separacion['depoMatOrganica']=  1;
            else array_separacion['depoMatOrganica']=  0;
        
            if (document.getElementById('depoPilas').checked) array_separacion['depoPilas']=  1;
            else array_separacion['depoPilas']=  0;
        
            if (document.getElementById('depoAceites').checked) array_separacion['depoAceites']=  1;
            else array_separacion['depoAceites']=  0;
        
            if (document.getElementById('depoPinturas').checked) array_separacion['depoPinturas']=  1;
            else array_separacion['depoPinturas']=  0;
        
            if (document.getElementById('medicamentos').checked) array_separacion['medicamentos']=  1;
            else array_separacion['medicamentos']=  0;
        
            if (document.getElementById('toners').checked) array_separacion['toners']=  1;
            else array_separacion['toners']=  0;
        
            if (document.getElementById('movil').checked) array_separacion['movil']=  1;
            else array_separacion['movil']=  0;
        
        
            var total_si = 0, total_no=0;
            for (x in array_separacion)
            {
                total_si = total_si + array_separacion[x];
                total_no = 17 - total_si;
            }
        
        
            var total_vidriopapelyenvases;
            total_vidriopapelyenvases = array_separacion['vidrio'] + array_separacion['papel'] + array_separacion['envases'] + array_separacion['depoVidrio'] + array_separacion['depoPapel'] + array_separacion['depoEnvases'];
        
            if (total_si==17)
                document.getElementById('habitosSeparacion').value=1; // evento 21 (Todas sí)
            else if ((total_no == 1) || (total_no == 2))
                document.getElementById('habitosSeparacion').value=2; // evento 22  (No a 1 o 2 preguntas)
            else if (total_vidriopapelyenvases==6)
                document.getElementById('habitosSeparacion').value=3; // evento 23 (sí a vidrio, papel y envases)
            else if (total_si==0)
                document.getElementById('habitosSeparacion').value=4; // evento 24 (No a todo)
            else
                document.getElementById('habitosSeparacion').value=0;  // ?¿?¿?¿
        
        }
        
        
        
        function total() {
            totalmateriaorganica = (580 * document.getElementById('TIPODECOMIDA').value);
            totalpapelycarton = (200 * document.getElementById('PERIODICO').value) + (100 * document.getElementById('LATASDECONSERVA').value)+(40*document.getElementById('LATASDECONSERVA').value);
            totalvidrio = (80*document.getElementById('BOTELLASDEVIDRIO').value) + (40*document.getElementById('FRASCOSDEVIDRIO').value);
            totalplastico = (((100*document.getElementById('BOTELLASDEPLASTICO').value) + (50 * document.getElementById('TARROSDEPLASTICO').value) + (20 * document.getElementById('BOLSASDEPLASTICO').value))* document.getElementById('MINIENVASES').value * document.getElementById('ENVASESPARAALIMENTOSFRESCOS').value) ;
            totalmetales = (40*document.getElementById('LATASDEBEBIDA').value) + (60 * document.getElementById('LATASDECONSERVA').value);
            totalbricks = 40 *document.getElementById('BRICKS').value * document.getElementById('MINIENVASES').value;
        
            sumadeparciales = totalmateriaorganica + totalpapelycarton + totalvidrio + totalplastico + totalmetales + totalbricks + 150;
        
        
            totalenpeso = ((0,8*sumadeparciales * document.getElementById('PERSONASVIVENENCASA').value) +(0,2*sumadeparciales* document.getElementById('CANTIDADCOMIDAS').value));
            porcentajetotal = totalenpeso *100/1130;
        
            porcentajemo = ((totalmateriaorganica*100)/sumadeparciales)
            porcentajepapelycarton = ((totalpapelycarton*100)/sumadeparciales)
        
            porcentajevidrio = ((totalvidrio*100)/sumadeparciales)
            porcentajeplastico = ((totalplastico*100)/sumadeparciales)
            porcentajemetal = ((totalmetales*100)/sumadeparciales)
            porcentajebrick = ((totalbricks*100)/sumadeparciales)
        
        
            var aux = totalenpeso/10000;
            document.getElementById('totalcam').value  = Math.round(aux*10)/10; // para redondear a 2 decimales
            var aux = porcentajetotal/10;
            document.getElementById('total2cam').value = Math.round(aux*10)/10;  // para redondear a 2 decimales
        
            document.getElementById('total3cam').value = Math.round(porcentajemo);
            document.getElementById('total4cam').value = Math.round(porcentajepapelycarton);
        
            document.getElementById('total5cam').value = Math.round(porcentajevidrio);
            document.getElementById('total6cam').value = Math.round(porcentajeplastico);
            document.getElementById('total7cam').value = Math.round(porcentajemetal);
            document.getElementById('total8cam').value = Math.round(porcentajebrick);
            document.getElementById('total9cam').value = 100 - (Math.round(porcentajemo) + Math.round(porcentajepapelycarton) + Math.round(porcentajevidrio) + Math.round(porcentajeplastico) + Math.round(porcentajemetal) + Math.round(porcentajebrick));
        
            //alert("totalmateriaorganica "+totalmateriaorganica+"\ntotalpapelycarton"+ totalpapelycarton + "\ntotalvidrio" + totalvidrio+"\ntotalplastico "+ totalplastico+"\ntotalmetales " + totalmetales + "\ntotalbricks " + totalbricks + "\n\n\nsumadeparciales" + sumadeparciales + "\n\n\ntotalenpeso " + totalenpeso)
        
        
        }
        
        function noseparonada(form){
            if (document.getElementById('separanada').checked){
        
                form.vidrio[1].checked = true
                form.papel[1].checked = true
                form.envases[1].checked = true
                form.materiaorganica[1].checked = true
                form.pilas[1].checked = true
                form.aceites[1].checked = true
                form.pinturas[1].checked = true
                form.depoVidrio[1].checked = true
                form.depoPapel[1].checked = true
                form.depoEnvases[1].checked = true
                form.depoMatOrganica[1].checked = true
                form.depoPilas[1].checked = true
                form.depoAceites[1].checked = true
                form.depoPinturas[1].checked = true
                form.medicamentos[1].checked = true
                form.toners[1].checked = true
                form.movil[1].checked = true
        
            }else{
        
            }
        }
        
        function analisis(form){
            comidas();
            papeles1();
            papeles2();
            envasesCon();
            separacion();
            var porcentajevar = document.getElementById('totalcam').value;
        
            if (porcentajevar == "") {
                alert("Para conocer el análisis de tu caso debes realizar el cálculo general.");
            }else{
        
                document.forms["Resultado"].submit();
            }
        }
