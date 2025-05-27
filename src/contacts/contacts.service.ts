// src/contacts/contact.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Contact } from './entities/contact.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(Contact)
    private contactRepository: Repository<Contact>,
  ) {}

  async create(data: Partial<Contact>) {
    const contact = this.contactRepository.create(data);
    return this.contactRepository.save(contact);
  }

  async findAll() {
    return this.contactRepository.find();
  }
}
