import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Button } from '@/app/components/ui/button';

export function StudentRegistrationScreen() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="max-w-2xl mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Регистрация ученика</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {submitted ? (
            <p className="text-green-700">Заявка отправлена куратору на проверку.</p>
          ) : (
            <>
              <div className="space-y-2">
                <Label htmlFor="fullName">ФИО</Label>
                <Input id="fullName" placeholder="Иванов Иван Иванович" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="className">Класс</Label>
                <Input id="className" placeholder="10-1" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="student@school.edu" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Пароль</Label>
                <Input id="password" type="password" />
              </div>
              <Button className="w-full" onClick={() => setSubmitted(true)}>Отправить заявку</Button>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
