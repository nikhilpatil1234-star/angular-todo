import {
  Component,
  ElementRef,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import {
  fromEvent,
  debounceTime,
  distinctUntilChanged,
  of,
  map,
  from,
  filter,
  interval,
  Subject,
  reduce,
  Observable,
  BehaviorSubject,
} from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnChanges {
  console: any;
  public isAvailable: boolean = true;
  public display: boolean = false;
  public isSpecial: boolean = false;
  public term = new FormControl();
  public results: any;
  public msg: any;

  users = {
    data: [
      {
        status: 'active',
        age: 25,
      },
      {
        status: 'active',
        age: 28,
      },
      {
        status: 'inactive',
        age: 36,
      },
      {
        status: 'active',
        age: 40,
      },
    ],
  };
  user$ = new BehaviorSubject<any>(null);
  users$ = of(this.users.data);
  status$ = this.users$.pipe(map((x) => x.map((x) => x.status)));
  filtered$ = this.users$.pipe(
    map((x) => {
      return x.map((x) => x.age);
    }),
    map((x) => {
      return x.filter((x) => x > 25);
    })
  );
  documentClick$ = fromEvent(document, 'click');
  @ViewChild('myInput') myInput: ElementRef<any> | undefined;

  constructor(
    private apiService: ApiService,
    private http: HttpClient,
    private element: ElementRef
  ) {}
  ngOnInit(): void {
    this.documentClick$.subscribe((x) => {
      console.log('x', x);
    });
    this.user$.next({ status: 'dsrgetny', age: 254 });
    this.user$.next({ status: 'dsrgetny', age: 25 });
    this.user$.next({ status: 'dsrgetny', age: 4 });
    this.user$.next({ status: 'dsrgetny', age: 24 });

    this.user$.subscribe((x) => {
      console.log('x', x?.age);
    });
    this.users$.subscribe((user) => {
      console.log('user', user);
    });

    // console.log(this.term.value);
    this.apiService.getCoutries(this.term.value).subscribe((data) => {
      console.log('data', data);
    });
    this.getCdata();
    let obser = new Observable((sub) => {
      sub.next(this.users);
    }).pipe(
      map((x: any) => {
        return x.data;
      }),
      map((x) => {
        return x.filter((user: any) => user.status === 'active');
      }),
      map((val) => {
        return val.reduce((sum: any, user: any) => sum + user.age, 0);
      })
    );
    const observer = {
      next: (v: any) => {
        console.log('v', v);
      },
      error: (err: any) => {
        console.log('err', err);
      },
      complete: () => {
        console.log('first');
      },
    };
    obser.subscribe(observer);
    of(1, 2, 3)
      .pipe(filter((x) => x > 2))
      .subscribe((x) => console.log('x', x));
    let subject = new Subject<number>();
    subject.subscribe({
      next(value) {
        console.log(value, 'value');
      },
    });
    subject.subscribe({
      next(value) {
        console.log('value', value);
      },
    });
    subject.next(1);
    subject.next(2);
  }
  ngOnChanges(changes: SimpleChanges): void {}
  change() {
    this.isSpecial = !this.isSpecial;
  }
  getCdata(): void {
    this.term.valueChanges
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((searchTerm: any) => {
        this.http
          .get(
            `https://restcountries.com/v3.1/name/${searchTerm}
          `
          )
          .subscribe(
            (data) => {
              console.log('data', data);
              this.results = data;
            },
            (err) => {
              console.log('err', err);
              this.msg = err.statusText;
            }
          );
      });
  }
  doSearch(event: any): void {
    console.log('event', event.target.value);
  }
  onKeyDown(event: KeyboardEvent) {
    console.log('event', event);
    if (event.key === '/') {
      console.log('event', event);
      this.myInput?.nativeElement.style.focus();
    }
  }
}
