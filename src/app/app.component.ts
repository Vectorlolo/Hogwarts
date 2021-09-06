import { BreakpointObserver, MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mobileQuery: MediaQueryList;

  title:string = 'Hogwarts';
  showFiller:boolean = false;
  option:string = 'hogwarts'

  ngOnInit() {
  }

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  // ngAftherViewInit(){
  //   this.observer.observe(['(max-width:800px)']).subscribe((response)=>{
  //     if(response.matches){
  //       this.sidenav.mode = 'over';
  //       this.sidenav.close()
  //     }else{
  //       this.sidenav.mode = 'side';
  //       this.sidenav.open()
  //     }
  //   })
  // }
}
