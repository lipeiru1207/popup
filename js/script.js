var Popup=function(opt){
    this.tit=opt.tit;
    this.con=opt.con;
    this.btn=opt.btn[0];
    this.btns=opt.btn[1];
    this.init();
}
Popup.prototype={
    constructor:Popup,
    init:function(){
        var that=this;
        var btn=document.querySelector('#btn');
        btn.onclick=function(){
            var mark=document.createElement('mark');
            mark.classList.add('mark');
            var div=document.createElement('div');
            div.classList.add('box');
            var h3=document.createElement('h3');
            h3.innerHTML=that.tit;
            var p=document.createElement('p');
            p.innerHTML=that.con;
            var btnn=document.createElement('div');
            btnn.classList.add('btnn');
            var bt=document.createElement('button');
            bt.innerHTML=that.btn;
            bt.classList.add('bt');
            var bts=document.createElement('button');
            bts.innerHTML=that.btns;
            bts.classList.add('bts');
            div.appendChild(h3);
            div.appendChild(p);
            div.appendChild(btnn);
            btnn.appendChild(bt);
            btnn.appendChild(bts);
            mark.appendChild(div);
            document.body.appendChild(mark);
            var bt=document.querySelector('.bt');
            var bts=document.querySelector('.bts');
            var mark=document.querySelector('.mark');
            bt.onclick=function(){
                document.body.removeChild(mark);
            }
            bts.onclick=function(){
                document.body.removeChild(mark);
            }
        }
    }
}