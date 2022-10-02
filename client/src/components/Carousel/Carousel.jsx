import { Carousel } from 'solid-bootstrap'

export default function CarouselWrapper() {
    

    return (
        <Carousel>
            <Carousel.Item interval={1000}>
                <div
                class="d-block w-100 bg-secondary d-flex justify-content-center align-items-center"
                style={{ height: "400px" }}
                >
                </div>
              
                <Carousel.Caption>
                <h3>First slide label (1 sec)</h3>
                <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <div
                class="d-block w-100 bg-secondary d-flex justify-content-center align-items-center"
                style={{ height: "400px" }}
                >
                </div>
                <Carousel.Caption>
                <h3>Second slide label (2 secs)</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <div
                class="d-block w-100 bg-secondary d-flex justify-content-center align-items-center"
                style={{ height: "400px" }}
                >
                </div>
                <Carousel.Caption>
                <h3>Third slide label (3 secs)</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

