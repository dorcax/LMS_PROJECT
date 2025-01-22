import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { LecturerModule } from './lecturer/lecturer.module';
import { AdminModule } from './admin/admin.module';
import { StudentModule } from './student/student.module';
import { MailerModule } from './mailer/mailer.module';

@Module({
  imports: [AuthModule, UserModule, LecturerModule, AdminModule, StudentModule, MailerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
