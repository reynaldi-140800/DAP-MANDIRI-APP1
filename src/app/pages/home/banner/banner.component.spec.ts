import { CommonModule } from "@angular/common"
import { DebugElement } from "@angular/core"
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { By } from "@angular/platform-browser"
import { BannerComponent } from "./banner.component"

describe ('5. Banner Page Component Test scenario',()=>{
    let fixture: ComponentFixture<BannerComponent> // semua perlengkapan di dalam AppComponent diambil dan dimasukkan ke dalam fixture
    let component: BannerComponent
    let element: HTMLElement
    let debugElement: DebugElement

    beforeAll(() => {
        TestBed.configureTestingModule({
            imports: [CommonModule],
            declarations: [BannerComponent]
        })

        fixture = TestBed.createComponent(BannerComponent)
    })

    beforeEach(() => {
      fixture.detectChanges()
      component = fixture.componentInstance
      element = fixture.nativeElement
      debugElement = fixture.debugElement
    })
    describe('5.1 component should be initialized',()=>{
        it('component should be created',()=>{
            expect(component).toBeTruthy()
            expect(component).toBeInstanceOf(BannerComponent)
        })

        it('Component view element should be created',()=>{
            expect(element).toBeTruthy()
        })
    })
    describe('5.2 Component should have the required properties and tags',()=>{
        const expectedBanner = 'We focus on training and teaching our clients the fundamentals and advance programming languages that suitable for the industry'

        xit(`title should have value as ${expectedBanner}`,()=>{
            expect(component.banner).toMatch(expectedBanner)
        })
        it (`banner application subTitle should contain value as ${expectedBanner}`,()=>{
            const banner = element.querySelector('p') as Element

            expect(banner).toBeTruthy()
            expect(banner.textContent).toContain(component.banner)
        })

        xit('Banner application button should have warning classes',()=>{
            const warning = debugElement.query(By.css('.text-warning')) 
            expect(Object.values(warning.classes)).toContain(true)
        })
    })
})