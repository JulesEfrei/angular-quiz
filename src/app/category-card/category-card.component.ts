import { Component, Input } from '@angular/core';
import { Category } from '../shared/models/category.model';

@Component({
  selector: 'app-category-card',
  standalone: false,
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.scss'
})
export class CategoryCardComponent {
  @Input() category!: Category;
}
