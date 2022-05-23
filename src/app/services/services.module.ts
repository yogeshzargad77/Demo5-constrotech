import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConstructionConsultantComponent } from './construction-consultant/construction-consultant.component';
import { ReconstructionServicesComponent } from './reconstruction-services/reconstruction-services.component';
import { ArchitecturalDesignComponent } from './architectural-design/architectural-design.component';
import { DesignAndConstructionComponent } from './design-and-construction/design-and-construction.component';
import { GreenBuildingComponent } from './green-building/green-building.component';
import { HouseRenovationComponent } from './house-renovation/house-renovation.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  {path : 'architectural-design', component : ArchitecturalDesignComponent},
  {path : 'construction-consultant', component : ConstructionConsultantComponent},
  {path : 'design-and-construction', component : DesignAndConstructionComponent},
  {path : 'green-building', component : GreenBuildingComponent},
  {path : 'house-renovation', component : HouseRenovationComponent},
  {path : 'reconstruction-services', component : ReconstructionServicesComponent}
]

@NgModule({
  declarations: [
    ConstructionConsultantComponent,
    ReconstructionServicesComponent,
    ArchitecturalDesignComponent,
    DesignAndConstructionComponent,
    GreenBuildingComponent,
    HouseRenovationComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)]
  ]
})
export class ServicesModule { }
