// src/contacts/contact.controller.ts
import { Controller, Post, Body, Get } from '@nestjs/common';
import { ContactService } from './contacts.service';
import { Contact } from './entities/contact.entity';

@Controller('contacts')
export class ContactController {
  constructor(private contactService: ContactService) {}

  @Post()
  async create(@Body() body: Partial<Contact>) {
    return this.contactService.create(body);
  }

  @Get()
  async getAll(): Promise<Contact[]> {
    return this.contactService.findAll();
  }
}
