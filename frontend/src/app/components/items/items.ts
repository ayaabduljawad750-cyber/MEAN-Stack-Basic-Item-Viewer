import { Component, OnInit } from '@angular/core';
import { Item } from '../../services/item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-items',
  imports: [CommonModule],
  templateUrl: './items.html',
  styleUrl: './items.css',
})
export class Items implements OnInit {
    items: any[] = [];

  constructor(private item: Item) {}

  ngOnInit() {
    this.item.getItems().subscribe(data => {
      this.items = data;
    });
  }
}
