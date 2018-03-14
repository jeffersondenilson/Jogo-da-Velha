var jogador='x',turno=0,i=0, f=[], c=[]
function main(id){
	var b=end(id);
	if(b=='branco.png'){
		//substitui imagem em branco por x ou o
		document.getElementById(id).src=jogador+'.png'
		turno++;
		//verifica vitoria/empate e reinicia
		if(vitoria()==true){
			alert('vitoria de '+jogador+'\n'+turno+' turnos');
			pontos()
			r=prompt('jogar de novo?'+'\n'+'1-sim  2-não')
			if(r==1){
				reset()
				turno=0
				jogador='o'
			}else{
				location.reload()
			}
		}
		if(vitoria()==false && turno==9){
			alert('velha'+'\n'+turno+' turnos');
			r=prompt('jogar de novo?'+'\n'+'1-sim  2-não')
			if(r==1){
				reset()
				turno=0
				jogador='o'
			}else{
				location.reload()
			}
		}
		//verifica o jogador e atribui o proximo
		if(jogador=='x'){
			jogador='o'
		}else{
			jogador='x'
		}
	}
}

function end(id){
	//pega endereço da imagem
	var a=document.getElementById(id).src;
	//retorna a ultima parte do endereço
	return a.substring(a.length-10 , a.length);
}

function vitoria(){
	//condiçoes de vitoria na horizontal
	if(end('c1')==end('c2') && end('c1')==end('c3') && end('c1')!='branco.png'){
		return true
	}
	if(end('c4')==end('c5') && end('c4')==end('c6') && end('c4')!='branco.png'){
		return true
	}
	if(end('c7')==end('c8') && end('c7')==end('c9') && end('c7')!='branco.png'){
		return true
	}
	//vitoria na vertical
	if(end('c1')==end('c4') && end('c1')==end('c7') && end('c1')!='branco.png'){
		return true
	}
	if(end('c2')==end('c5') && end('c2')==end('c8') && end('c2')!='branco.png'){
		return true
	}
	if(end('c3')==end('c6') && end('c3')==end('c9') && end('c3')!='branco.png'){
		return true
	}
	//vitoria na diagonal
	if(end('c1')==end('c5') && end('c1')==end('c9') && end('c1')!='branco.png'){
		return true
	}
	if(end('c3')==end('c5') && end('c3')==end('c7') && end('c3')!='branco.png'){
		return true
	}
	return false
}

function pontos(){
	//pontuação
	f[i]=prompt('nome')
	c[i]=turno
	//ranqueamento
	var j=0, j1=0, s='', aux, aux1
	for(j1=0;j1<=i-1;j1++){
		for(j=0;j<=i-1;j++){
			if(c[j]>c[j+1]){
				//modifica pontos
				aux=c[j]
				c[j]=c[j+1]
				c[j+1]=aux
				//modifica nomes
				aux1=f[j]
				f[j]=f[j+1]
				f[j+1]=aux1
			}
		}
	}
	//rearmazena na variavel s
	j=0
	for(j=0;j<=i;j++){
		s=s+'<tr><td> '+f[j]+'  </td><td> '+c[j]+' turnos</td></tr>'
	}
	i++
	document.getElementById("recorde").innerHTML=s
}

function reset(){
	//reiniciar jogo
	var h=1
	for(h=1;h<=9;h++){
		cel='c'+h
		if(end(cel)!='branco.png'){
			document.getElementById(cel).src='branco.png'
		}
	}
}
