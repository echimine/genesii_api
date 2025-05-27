// src/contacts/contact.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contact } from './entities/contact.entity';
import { ContactService } from './contacts.service';
import { ContactController } from './contacts.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Contact])],
  providers: [ContactService],
  controllers: [ContactController],
})
export class ContactsModule {}
