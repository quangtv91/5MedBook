import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GlobalValidator} from '../../../../shared/form-validation/validators';
import {BookDetailModel} from '../../../../core/models/book/book.model';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  form: FormGroup;
  showDetailBookData: Boolean = false;
  max: Number = 5;
  rate: Number = 5;
  rateSubmit;
  isReadonly: Boolean = false;
  page = 1;
  pdfSrc = '';

  bookDetailData: BookDetailModel[] = [
    {
      id: 1,
      categoryName: 'Success Self-Help',
      title: 'How to Win Friends & Influence People',
      author: 'Dale Carnegie',
      price: 5,
      downloads: 1500,
      isbn10: 7007007007,
      isbn13: 7007007007007,
      year: 2019,
      pages: 777,
      edition: 19,
      language: 'English',
      extension: 'PDF',
      size: '15M',
      imageUserUrl: 'assets/images/app-user.png',
      imageUrl: 'assets/images/book-demo.jpg',
      imageDetailUrl: 'assets/images/book-detail-demo.png',
      detail: 'How to Win Friends and Influence People was first published in 1937\n' +
        'in an edition of only five thousand copies. Neither Dale Carnegie nor\n' +
        'the publishers, Simon and Schuster, anticipated more than this\n' +
        'modest sale. To their amazement, the book became an overnight\n' +
        'sensation, and edition after edition rolled off the presses to keep up\n' +
        'with the increasing public demand. Now to Win Friends and\n' +
        'InfEuence People took its place in publishing history as one of the\n' +
        'all-time international best-sellers. It touched a nerve and filled a\n' +
        'human need that was more than a faddish phenomenon of postDepression days, as evidenced by its continued and uninterrupted\n' +
        'sales into the eighties, almost half a century later.',
      detailBookData: 'Dale Carnegie used to say that it was easier to make a million dollars\n' +
        'than to put a phrase into the English language. How to Win Friends\n' +
        'and Influence People became such a phrase, quoted, paraphrased,\n' +
        'parodied, used in innumerable contexts from political cartoon to\n' +
        'novels. The book itself was translated into almost every known\n' +
        'written language. Each generation has discovered it anew and has\n' +
        'found it relevant.'
    }
  ];

  bookDetailReviewData = [
    {
      id: 1,
      userName: 'Trevor Miller',
      imageUserReviewUrl: 'assets/images/app-user.png',
      content: 'I\'ve been learning things all along, but I never learned how to actually apply the things I had learned until now. ' +
        'This book speaks my language and if your background sounds even remotely similar I have a feeling that you\'ll agree.'
    },
    {
      id: 2,
      userName: 'Krystine',
      imageUserReviewUrl: 'assets/images/app-user.png',
      content: 'If you\'re having troubles in life and simply can\'t figure out what you\'re doing wrong, this is a fantastic place to start. ' +
        'Good luck on your journey!'
    }
  ];

  constructor(
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      reviewData: [''],
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, GlobalValidator.emailFormat])]
    });
  }

  onShowDetailBookData() {
    this.showDetailBookData = !this.showDetailBookData;
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    console.log(this.rateSubmit);
    console.log(this.form.value);
  }

  onFileSelected() {
    const img: any = document.querySelector('#file');
    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.pdfSrc = e.target.result;
      };
      reader.readAsArrayBuffer(img.files[0]);
    }
  }

}
