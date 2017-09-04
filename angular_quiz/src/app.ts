import {Component} from 'angular2/core';
import {NgForm}    from 'angular2/common';

@Component({
  selector: 'my-app',
  template: `

    <div class="container">
    <div class="col-md-6 col-md-offset-3 box">
    <img src="logo2.jpg" class="form-control" style="height: 200px;">
    <div *ngIf="clicked">
    <center><h2>This is the quiz for Game of Thrones lovers!</h2>
    <button type="button" class="btn btn-warning" (click)="onButton()">Let start it!</button></center>
    </div>

    <form *ngIf="active" (ngSubmit)="onSubmit()">
      <div class="form-group">
        <br>
        <ol>
           <li *ngFor="#question of questions; #ques_id = index">
              {{ question[0] }}

                <div class="radio" *ngFor="#answer of question[1]">
                    <label><input type="radio" value="{{ answer }}" (click)="user_answers.push(answer)"
                    name="answer_{{ques_id}}" required>
                        {{ answer }}
                    </label>
                </div>

            <hr>
           </li>
        </ol>

        <center><button type="submit" class="btn btn-warning" >OK</button></center>
      </div>
    </form>

    <div *ngIf="submitted">
        <center><h3>Congratulations!</h3>

        <p>You have {{ total }} from 10 right answers!</p>

        <p *ngIf='perfect' > Good Job! You are a real fan of Game of Thrones! </p>
        <p *ngIf='good'> Not bad! You like Game of Thrones, but need to watch all seasons again ;)</p>
        <p *ngIf='bad'> Sorry, you are like John Snow. Know nothing...</p>
        </center>

    </div>

    </div>
    </div>
    `
})

export class App {

public this.clicked = true;

public onButton(){
    this.active = true;
    this.clicked = false;
}

questions = [['Here me roar!', ['Lannister', 'Stark', 'Greyjoy', 'Targaryan']],
['The more people you love, the weaker you are.', ['Arya Stark', 'Cersei  Lannister', 'Catelyn Stark', 'Brienne Tarth']],
['When you play the game of thrones, you win or die. There is no middle ground.', ['Taywin Lannister', 'Littlefinger', 'Cersei  Lannister','Robert Baration']],
['Death is so terribly final, while life is full of possibilities.', ['Ned Stark', 'Tyrion Lannister', 'Bran Stark', 'Jon Snow']],
['This is not the day I die.',[ 'Robb Stark', 'Arya Stark', 'Oberyn Martell', 'Tyrion Lannister']],
['Calling yourself a king does not make you one.', ['Margaery Tyrell', 'Varis', 'Tywin Lannister',  'Robb Stark']],
['I am not questioning your honour. I am denying its existence', ['Catelyn Stark', 'Tyrion Lannister', 'Oberyn Martell', 'Roose Bolton']],
['The things I do for love...', ['Jaime Lannister', 'Catelyn Stark', 'Margaery Tyrell', 'Cersei  Lannister']],
[' My father told me big men fall just as quick as little ones, if you put a sword through their hearts.', ['Tyrion Lannister', 'Jaime Lannister', 'John Snow', 'Robb Stark']],
['It seems to me that a queen who trusts no one is as foolish as a queen who trusts everyone.', ['Daenerys Targaryan', 'Tyrion Lannister', 'Taywin Lannister', 'Littlefinger']]
];

public submitted = false;

public user_answers = [];

public onSubmit(){

    this.submitted = true;
    this.active = false;
    this.clicked = false;
    $('body').css("background", "url('fire.jpg')");

    answers = ['Lannister', 'Cersei  Lannister', 'Cersei  Lannister','Tyrion Lannister', 'Oberyn Martell',
    'Margaery Tyrell', 'Tyrion Lannister', 'Jaime Lannister', 'John Snow', 'Daenerys Targaryan'];

    counter = 0;
    for (var _i = 0; _i < 10; _i++) {
            if (answers[_i] == this.user_answers[_i]){
                counter += 1;
            };
     };

    this.total = counter;

    if (counter > 8){
        this.perfect = true;
    }
    if (counter > 3 && counter < 9){
        this.good = true;
    }
    if (counter < 4){
        this.bad = true;
    }
}

}