class Form{
    constructor(){
        this.button = createButton('Play');
    }

    hide(){
        this.button.hide();
        
    
    }


    display(){
        var title = createElement('h2');
        title.html('Você é um zagueiro de uma equipe prestigiada da Europa\nseus companheiros decidem te treinar para a\npartida de amanhã');
        title.position(130, 0);

        this.button.position(700, 200)

        this.button.mousePressed(()=>{
            this.button.hide();
            title.html.hide();
        })

     }
}