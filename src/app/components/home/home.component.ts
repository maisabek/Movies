import { Component, OnInit ,TemplateRef} from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NgwWowService } from 'ngx-wow';
import { ServiceService } from 'src/app/services/service.service';
import {TranslateService} from '@ngx-translate/core'
import { NgWizardConfig, NgWizardService, StepChangedArgs, StepValidationArgs, STEP_STATE, THEME } from 'ng-wizard';
import { of } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor(private wowService: NgwWowService,
    public ServiceService:ServiceService,private ngWizardService: NgWizardService,
    private dailog:MatDialog,public translate:TranslateService) {
    this.wowService.init();
  }  
  // api
  imagePrefix:string="https://image.tmdb.org/t/p/w500/";
  allMovie:any
  getData(){
    this.ServiceService.getMovies(1).subscribe((res)=>{
      this.allMovie=res.results
    })
  }
  allNews:any
  getNews(){
      this.ServiceService.getNews().subscribe((res)=>{
        this.allNews=res.articles
      })
  }
  allGames:any
  getGames(){
    this.ServiceService.getGames().subscribe((res)=>{
      this.allGames=res
    })
}

  ngOnInit(): void {
    this.getData()
    this.getNews()
    this.getGames()
  }


  // dialog
  openDailog(TemplateRef:TemplateRef<any>){
     this.dailog.open(TemplateRef)
  }
  closeDialog(){
   this.dailog.closeAll()
  }

  // wizard
  
  // owl carosoual
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    autoplay:true,
    margin:20,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },
    nav: false
  }

  customOptions2: OwlOptions = {
    loop: true,
    mouseDrag: true,
    autoplay:true,
    margin:20,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },
    nav: false
  }

  customOptions3: OwlOptions = {
    loop: true,
    mouseDrag: true,
    autoplay:true,
    margin:20,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },
    nav: false
  }

 
  view: number[] = [600, 400];

  // chart
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  // yAxisLabel = 'Sales';
  timeline = true;
  colorScheme = {
    domain: ['#9370DB', '#87CEFA', '#FA8072', '#FF7F50']
  };
  public majorTicks = {
    color: 'white',
    size: 15
    }
    
    public minorTicks = {
    color: 'lightgray',
    size: 10
    }
  //pie
  showLabels = true;

public single = [
  {
    "name": "China",
    "value": 2243772
  },
  {
    "name": "USA",
    "value": 1126000
  },
  {
    "name": "Norway",
    "value": 296215
  },
  {
    "name": "Japan",
    "value": 257363
  }
];

public multi = [
  {
    "name": "China",
    "series": [
      {
        "name": "2018",
        "value": 2243772
      },
      {
        "name": "2017",
        "value": 1227770
      }
    ]
  },

  {
    "name": "USA",
    "series": [
      {
        "name": "2018",
        "value": 1126000
      },
      {
        "name": "2017",
        "value": 764666
      }
    ]
  },

  {
    "name": "Norway",
    "series": [
      {
        "name": "2018",
        "value": 296215
      },
      {
        "name": "2017",
        "value": 209122
      }
    ]
  },

  {
    "name": "Japan",
    "series": [
      {
        "name": "2018",
        "value": 257363
      },
      {
        "name": "2017",
        "value": 205350
      }
    ]
  },

  {
    "name": "Germany",
    "series": [
      {
        "name": "2018",
        "value": 196750
      },
      {
        "name": "2017",
        "value": 129246
      }
    ]
  },

  {
    "name": "France",
    "series": [
      {
        "name": "2018",
        "value": 204617
      },
      {
        "name": "2017",
        "value": 149797
      }
    ]
  }
];












}
