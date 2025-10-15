import { Component, Input } from '@angular/core';
import { Category } from '../shared/models/category.model';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-category-card',
  standalone: false,
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.scss',
})
export class CategoryCardComponent {
  @Input() category!: Category;

  private playerName = '';

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.playerName = this.authService.user?.username || '';
  }

  goToQuizPage(categoryId: number) {
    this.router.navigate(['/quiz', categoryId, this.playerName]);
  }
}
