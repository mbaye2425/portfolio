import { Component, OnInit } from '@angular/core';
import { TranslationLoaderService } from '../service/translation-loader.service';
import { locale as french } from '../shared/i18n/fr';
import { referencesFr} from '../api/referencesFr';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.css']
})
export class ReferencesComponent implements OnInit {
  references:any=referencesFr;
  constructor(private _translationLoaderService: TranslationLoaderService,private _translateService: TranslateService) {
    this._translationLoaderService.loadTranslations( french);
    this._translateService.onLangChange.subscribe(()=>{
      if(this._translateService.currentLang=="en"){
        this.references=referencesFr;
      }
      else{
        this.references=referencesFr;
      }
    });
  }

  ngOnInit(): void {
  }

}
