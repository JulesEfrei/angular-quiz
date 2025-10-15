import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from '../shared/services/quiz.service';
import { Category } from '../shared/models/category.model';
import { CategoryService } from '../shared/services/category.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
  standalone: false,
})
export class QuizComponent implements OnInit {
  isQuizFinished = this.quizService.isQuizFinished;
  playerName = '';
  category: Category | null = null;

  constructor(
    private quizService: QuizService,
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.quizService.playerName = params['playerName'];
      this.playerName = params['playerName'];
      this.quizService.categoryId = Number(params['categoryId']);

      this.categoryService
        .getCategoryById(Number(params['categoryId']))
        .subscribe((category) => {
          this.category = category;
        });
    });
  }

  goToResultPage() {
    this.router.navigate(['/result']);
  }
}
