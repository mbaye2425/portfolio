import { Component, OnInit } from '@angular/core';
import { TranslationLoaderService } from '../service/translation-loader.service';
import { locale as english } from '../shared/i18n/en';
import { locale as french } from '../shared/i18n/fr';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills:any={
    technologies:[{name:"Java, J2EE, Spring, Struts",percent:60,remark:'excellent'},{name:"NODE JS,EXPRESS JS,EJS",percent:50,remark:"good"}, {name:"PHP ,Symfony, Api Platform",percent:50,remark:'good'},{name:"Android",percent:30,remark:'good'},{name:"Python, Flask",percent:40,remark:'very-good'}, {name:"JavaScript,jQUERY, BootStrap", percent:50,remark:'excellent'},{name:"Angular, React, React Native, Ionic ",percent:70,remark:"good"},{name:"APIs,RESTFUL",percent:75,remark:"good"}],
    tools:[{name:"GitHub/GitLab/Bitbucket ",percent:60,remark:'excellent'},{name:"Office",percent:90,remark:'excellent'},{name:"Linux, Windows",percent:70,remark:'very-good'},{name:"MySql, PgSql",percent:40,remark:'excellent'},{name:"MongoDB,Mongoose",percent:40,remark:'excellent'},{name:"Docker, Kubernetes",percent:50,remark:'average'},{name:"Jira,Trello,",percent:40,remark:"good"},{name:"Postman",percent:80,remark:"good"}],
    methodologies:[{name:"Scrum",percent:70,remark:'very-good'},{name:"Kanban",percent:40,remark:"good"},{name:"Uml",percent:90,remark:'excellent'},{name:"XP",percent:20,remark:'good'},{name:"TDD",percent:90,remark:'excellent'},{name:"DevOps",percent:50,remark:'average'},{name:"BDD",percent:50,remark:'average'},{name:"DDD",percent:50,remark:'average'}]
  };

  constructor(private _translationLoaderService: TranslationLoaderService) {
    this._translationLoaderService.loadTranslations(english, french);
  }

  ngOnInit(): void {
  }

}

    
    
  
