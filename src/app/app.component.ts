import { AfterViewChecked, AfterViewInit, Component ,ElementRef,OnInit} from '@angular/core';
import { ServiceService } from './services/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,AfterViewInit,AfterViewChecked {
  title = 'movies';
  ngOnInit(): void {}
  onActivate(event:any) {
    window.scroll(0,0);
}
constructor(private elementRef: ElementRef,private serviceService:ServiceService){}
ngAfterViewInit(){
  this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = this.serviceService.globalColor
}

ngAfterViewChecked(){
  this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = this.serviceService.globalColor

}


}
