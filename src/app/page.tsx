import { Button } from "@/components/ui/button";
import ImgGravity from "@/img/img-gravity.webp";
import {
  Card,
  CardContent,
  CardDescription,
  CardDiscountPrice,
  CardFooter,
  CardGrossPrice,
  CardHeader,
  CardImage,
  CardTitle,
} from "./components/cards";
export default function Home() {
  return (
    <main className="p-3 flex flex-col gap-3">
      <Card>
        <CardImage alt="level aleatorio gravity" src={ImgGravity} />
        <CardHeader>
          <CardTitle>
            Pacote de armas Padrão{" "}
            <span className="text-neutral-300">(Rivais)</span>
          </CardTitle>
          <CardDescription>
            Adquira o Pacore de Armas Padrão <span>(Rivais)</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CardDiscountPrice>
            R$ 19,90
            <CardGrossPrice>R$ 21,90</CardGrossPrice>
          </CardDiscountPrice>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-emerald-600">Compre Agora</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardImage alt="level aleatorio gravity" src={ImgGravity} />
        <CardHeader>
          <CardTitle>
            Pacote de armas Padrão{" "}
            <span className="text-neutral-300">(Rivais)</span>
          </CardTitle>
          <CardDescription>
            Adquira o Pacore de Armas Padrão <span>(Rivais)</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CardDiscountPrice>
            R$ 19,90
            <CardGrossPrice>R$ 21,90</CardGrossPrice>
          </CardDiscountPrice>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-emerald-600">Compre Agora</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardImage alt="level aleatorio gravity" src={ImgGravity} />
        <CardHeader>
          <CardTitle>
            Pacote de armas Padrão{" "}
            <span className="text-neutral-300">(Rivais)</span>
          </CardTitle>
          <CardDescription>
            Adquira o Pacore de Armas Padrão <span>(Rivais)</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CardDiscountPrice>
            R$ 19,90
            <CardGrossPrice>R$ 21,90</CardGrossPrice>
          </CardDiscountPrice>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-emerald-600">Compre Agora</Button>
        </CardFooter>
      </Card>
    </main>
  );
}
