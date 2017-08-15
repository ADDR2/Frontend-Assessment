interface gnome {
    id: number,
    name: string,
    thumbnail: string,
    age: number,
    weight: number,
    height: number,
    hair_color: string,
    professions: string[],
    friends: string[]
};

interface options {
    Name: string,
    Age: string,
    Height: string,
    Weight: string,
    "Hair color": string
};

class controller {
    data: gnome[] = [];
    filteredData: gnome[] = [];
    modal: any;
    selectedGnome: gnome = null;
    filterBy: string;
    input: string;
    filterOptions: options = {
        Name: "name",
        Age: "age",
        Height: "height",
        Weight: "weight",
        "Hair color": "hair_color"
    };

    constructor(getGnomes: any){
        this.modal = document.getElementById('myModal');

        getGnomes.then(
            response => {
                this.data = response.data.Brastlewark;
                this.filteredData = response.data.Brastlewark;
            }, error => {
                console.log(error);
            }
        );
    }

    displayModal(event, id){
        this.modal.style.display = "block";
        this.selectedGnome = {
            ...this.data[id]
        };
    }

    hideModal(event){
        this.modal.style.display = "none";
        this.selectedGnome = null;
    }

    filterGnomes(event){
        if(this.filterBy in this.filterOptions)
            this.filteredData = this.data.filter( item => {
                return item[this.filterOptions[this.filterBy]].toString().includes(this.input);
            });
    }
}

export const mainController = app => {
    app.controller("mainController", controller);
};