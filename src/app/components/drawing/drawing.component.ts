import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {fabric} from 'fabric'
import {map} from 'rxjs/operators'
import {ServiceService} from '../../services/service.service'
@Component({
  selector: 'app-drawing',
  templateUrl: './drawing.component.html',
  styleUrls: ['./drawing.component.scss']
})
export class DrawingComponent implements OnInit {
  private canvas: any;
 private textString: string="";
 private size: any = {
   width: 1300,
   height: 500
 };
  OutputContent: string="";
  currentLang:string
  constructor(public translate:TranslateService,public ServiceService:ServiceService){
    this.currentLang=localStorage.getItem('currentLanguage') || 'en'
    this.translate.use(this.currentLang)
  }
  ngOnInit(): void {

    this.translate.onLangChange.subscribe(()=>{
      console.log(this.translate)
    })

   this.canvas  = new fabric.Canvas('c',{
    hoverCursor: 'pointer',
    selection: true,
    selectionBorderColor: 'blue'
   });
   this.canvas.setWidth(this.size.width);
   this.canvas.setHeight(this.size.height);
  }
  addCircle(){
    var radius$=Math.random()*100
    var left$=Math.random()*500
    var top$=Math.random()*200
    var red=Math.random()*254
    var green=Math.random()*254
    var blue=Math.random()*254
   var circle=new fabric.Circle({radius:radius$,left:left$,top:top$,fill:'rgb('+red+','+green+','+blue+')'})
   this.canvas.add(circle)
  }
  addRectangle(){
    var radius$=Math.random()*100
    var width$=Math.random()*200
    var height$=Math.random()*100
    var left$=Math.random()*850
    var top$=Math.random()*240
    var red=Math.random()*254
    var green=Math.random()*254
    var blue=Math.random()*254
   var rectangle=new fabric.Rect({width:width$,height:height$,left:left$,top:top$,angle:30,fill:'rgb('+red+','+green+','+blue+')'})
   this.canvas.add(rectangle)
  }
  addTriangle(){
    var radius$=Math.random()*10
    var width$=Math.random()*150
    var height$=Math.random()*100
    var left$=Math.random()*950
    var top$=Math.random()*300
    var red=Math.random()*254
    var green=Math.random()*254
    var blue=Math.random()*254
   var Triangle=new fabric.Triangle({width:width$,height:height$,left:left$,top:top$,angle:30,fill:'rgb('+red+','+green+','+blue+')'})
   this.canvas.add(Triangle)
  }
  addParrallelRectangle(){
    var radius$=Math.random()*100
    var width$=Math.random()*200
    var height$=Math.random()*100
    var left$=Math.random()*890
    var top$=Math.random()*120
    var red=Math.random()*254
    var green=Math.random()*254
    var blue=Math.random()*254
    var startPoint=[
      {x: 0, y: 42},
        {x: 155, y: 0},
        {x: 155, y: 243},
        {x: 0, y: 256}
    ]
   var clonedStartPoint=startPoint.map((o)=>{
     return fabric.util.object.clone(o)
   })
   var Triangle=new fabric.Polygon(clonedStartPoint,{width:width$,height:height$,left:left$,top:top$,angle:30,fill:'rgb('+red+','+green+','+blue+')'})
   this.canvas.add(Triangle)
  }
  addPolygon(){
    var width$=Math.random()*200
    var height$=Math.random()*100
    var left$=Math.random()*1200
    var top$=Math.random()*120
    var red=Math.random()*254
    var green=Math.random()*254
    var blue=Math.random()*254
    var Points=[{
      x: 3, y: 4
    }, {
      x: 16, y: 3
    }, {
      x: 30, y: 5
    },  {
      x: 25, y: 55
    }, {
      x: 19, y: 44
    }, {
      x: 15, y: 30
    }, {
      x: 15, y: 55
    }, {
      x: 9, y: 55
    }, {
      x: 6, y: 53
    }, {
      x: -2, y: 55
    }, {
      x: -4, y: 40
    }, {
      x: 0, y: 20
    }]
  
   var Polygon=new fabric.Polygon(Points,{width:width$,height:height$,left:left$,top:top$,angle:30,fill:'rgb('+red+','+green+','+blue+')'})
   this.canvas.add(Polygon)

  }
  addText(){
    var left$=Math.random()*550
    var top$=Math.random()*100
   var Textbox=new fabric.Textbox("Add Text",{left:left$,top:top$, width: 150})
   this.canvas.add(Textbox)
  }
  addCurve(){
    var left$=Math.random()*550
    var top$=Math.random()*100
    var Curve = new fabric.Path('M 65 0 Q 100, 300, 200, 0', {left:left$,top:top$, fill: '', stroke: 'black', objectCaching: false });
    this.canvas.add(Curve);

  }
 
  copySelected(){
   this.canvas.getActiveObject().clone((cloned:any) =>{
    Clipboard=cloned
   })
  }
 
  addSqure(){
    var left$=Math.random()*1100
    var top$=Math.random()*200
    var red=Math.random()*254
    var green=Math.random()*254
    var blue=Math.random()*254
   var Squre = new fabric.Rect({
      width: 100, height: 100, left: left$, top: top$, angle: 0,
      fill: 'rgb('+red+','+green+','+blue+')'
    })
    this.canvas.add(Squre)
  }

  clean(){
    this.canvas.clear();
  }
  save(){
    window.open(this.canvas.toDataURL("image/png"))
    var url=this.canvas.toDataURL("png")

    var a=document.createElement('a')
    a.href=url
    a.download='image.png'
    a.click()

  }
  ExportToContent(input:any) {
    if(input == 'json'){
      this.OutputContent = JSON.stringify(this.canvas);
    } else if(input == 'svg'){
     this.OutputContent = this.canvas.toSVG();
    }
  }
}