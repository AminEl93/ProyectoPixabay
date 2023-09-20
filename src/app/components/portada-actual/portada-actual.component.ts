import { Component, OnInit } from '@angular/core';
import { PortadaService } from 'src/app/services/portada.service';

@Component({
  selector: 'app-portada-actual',
  templateUrl: './portada-actual.component.html',
  styleUrls: ['./portada-actual.component.css'],
  providers: [PortadaService]
})

export class PortadaActualComponent implements OnInit{
    
    public portadas!: any[];
    public searchString!: string;
    public portadasEncontradas: boolean = false;
    public loading: boolean = false;
    
    constructor(private _portadaService: PortadaService) { }

    ngOnInit() { }

    obtenerPortadas(search: string) {
        this.loading = true;
        this.portadasEncontradas = false;
        this._portadaService.getPortadas(search).subscribe({
            next: response => {
                console.log(response);
                if(response.hits) {
                    this.portadasEncontradas = true;
                    this.portadas = response.hits;
                } else {
                    this.portadasEncontradas = false;
                }
            },
            error: error => console.log(error),            
            complete: () => {
                this.loading = false;
                console.info('complete');
            }
        });
    }
}
