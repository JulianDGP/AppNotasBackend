import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../models/note.interface';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  private baseUrl = 'http://localhost:8001'
  constructor(private http: HttpClient) { }

  getNotes(userId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${userId}/notes`);
  }

  getNotesByTag(userId: number, tagName: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${userId}/notes/tags/${tagName}`);
  }

  createNote(userId: number, note: Note): Observable<Note> {
    return this.http.post<Note>(`${this.baseUrl}/${userId}/notes`, note);
  }

  getNoteById(userId: number, noteId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${userId}/notes/${noteId}`);
  }

  updateNote(userId: number, noteId: number, note: Note): Observable<any> {
    return this.http.put(`${this.baseUrl}/${userId}/notes/${noteId}`, note);
  }

  deleteNote(userId: number, noteId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${userId}/notes/${noteId}`);
}


}
