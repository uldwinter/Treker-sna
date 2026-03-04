import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/app/components/ui/dialog';
import { Button } from '@/app/components/ui/button';
import { Label } from '@/app/components/ui/label';
import { Input } from '@/app/components/ui/input';
import { Textarea } from '@/app/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';
import { Upload, X } from 'lucide-react';

interface AddAchievementDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AddAchievementDialog({ open, onOpenChange }: AddAchievementDialogProps) {
  const [files, setFiles] = useState<string[]>([]);

  const handleAddFile = () => setFiles([...files, `Документ_${files.length + 1}.pdf`]);
  const handleRemoveFile = (index: number) => setFiles(files.filter((_, i) => i !== index));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Добавить достижение</DialogTitle>
          <DialogDescription>Заполните информацию о достижении и прикрепите подтверждающие документы</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="category">Категория достижения *</Label>
            <Select>
              <SelectTrigger id="category" className="bg-white"><SelectValue placeholder="Выберите категорию" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="academic">Учебные достижения</SelectItem>
                <SelectItem value="extracurricular">Внеурочная деятельность</SelectItem>
                <SelectItem value="project">Проектная деятельность</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="achievement-name">Наименование достижения *</Label>
            <Input id="achievement-name" type="text" placeholder="Например: Всероссийская олимпиада по математике" className="bg-white" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="level">Уровень</Label>
              <Select>
                <SelectTrigger id="level" className="bg-white"><SelectValue placeholder="Выберите уровень" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="international">Международный</SelectItem>
                  <SelectItem value="federal">Всероссийский</SelectItem>
                  <SelectItem value="regional">Региональный</SelectItem>
                  <SelectItem value="municipal">Муниципальный</SelectItem>
                  <SelectItem value="school">Школьный</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="result">Результат</Label>
              <Input id="result" type="text" placeholder="Например: Призёр, 1 место" className="bg-white" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="date">Дата достижения *</Label>
            <Input id="date" type="date" className="bg-white" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Описание</Label>
            <Textarea id="description" placeholder="Дополнительная информация о достижении" rows={3} className="bg-white" />
          </div>

          <div className="space-y-2">
            <Label>Прикрепить документы</Label>
            <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
              <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-gray-600 mb-2">Загрузите грамоты, сертификаты, дипломы</p>
              <Button type="button" variant="outline" size="sm" onClick={handleAddFile}>Выбрать файлы</Button>
              <p className="text-xs text-gray-500 mt-2">Поддерживаемые форматы: PDF, JPG, PNG (макс. 10 МБ)</p>
            </div>

            {files.length > 0 && (
              <div className="space-y-2 mt-3">
                {files.map((file, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-md">
                    <span className="text-sm text-gray-700">{file}</span>
                    <Button type="button" variant="ghost" size="sm" onClick={() => handleRemoveFile(index)}><X className="w-4 h-4" /></Button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>Отмена</Button>
            <Button type="submit" className="bg-green-600 hover:bg-green-700">Отправить на проверку</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
