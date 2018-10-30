import { YoutubeVideo } from './models/youtube-video';
import { YoutubeService } from './services/youtube.service';
import { Component, AfterViewInit, TemplateRef, HostListener } from '@angular/core';
import {  MatDialog, MatDialogRef } from '@angular/material';

declare var $: any;

@Component({
  selector: 'vkys-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'virtual-keyborad-youtube-search';


  videoUrl: string;
  videoId: string;
  videos: Array<YoutubeVideo> = [];
  isProcessing: boolean = false;
  isMobile = window.innerWidth <= 768;
  dialogRef: MatDialogRef<any>

  @HostListener("window:resize", [])
  onWindowResize() {
    this.isMobile = window.innerWidth <= 768;
  }
  constructor(private youtubeService: YoutubeService, private dialog: MatDialog) { }
  ngAfterViewInit() {
    $('#keyboard')['keyboard']({
      layout: 'custom',
      customLayout: {
        'normal': [
          '` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
          '{tab} q w e r t y u i o p [ ] \\',
          'a s d f g h j k l ; \' {enter}',
          '{shift} z x c v b n m , . / {shift}',
          '{accept} {space} {left} {right} {sp:.2} {del} {combo} {toggle} {extender}'],
        'shift': [
          '~ ! @ # $ % ^ & * ( ) _ + {bksp}',
          '{tab} Q W E R T Y U I O P { } |',
          'A S D F G H J K L : " {enter}',
          '{shift} Z X C V B N M < > ? {shift}',
          '{accept} {space} {left} {right} {sp:.2} {del} {combo} {toggle} {extender}']
      },
      usePreview: false,
      acceptValid: true,
      accepted: (e, keyboard, el) => {
        this.serach(el.value);
      }
    });

    $.keyboard.keyaction.enter = function(base){
      if (base.el.nodeName === "INPUT") {
        base.accept();      // accept the content
        
      } 
    };
  }

  viewInPop(template: TemplateRef<any>) {
    this.dialogRef = this.dialog.open(template, { disableClose: true });
  }

 


  sretUrl(videoId, template: TemplateRef<any>) {

    this.videoId = videoId;
    this.videoUrl = null;
    this.videoUrl = `https://www.youtube.com/embed/${videoId}`;
    if (this.isMobile) {
      this.viewInPop(template)
    }
  }

  serach(text: string) {
    if (!text) {
      return
    }
    this.isProcessing = true;
    this.youtubeService.search(text).then(data => {
      this.videos = data['items'] as any;
      this.isProcessing = false;
    }).catch(err => { this.isProcessing = false });;
  }
}
