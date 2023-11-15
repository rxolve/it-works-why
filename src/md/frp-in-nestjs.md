NestJS 공식 홈페이지에서 첫 소개를 아래와 같은 문장으로 시작한다.

> Nest (NestJS) is a framework for building efficient, scalable Node.js server-side applications. It uses progressive JavaScript, is built with and fully supports TypeScript (yet still enables developers to code in pure JavaScript) and combines elements of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming).

OOP도 FP도 백앤드를 개발할 때 자주 접하는 개념이지만 FRP는 생소해서 찾아보게 되었다.

## FRP란?

FRP는 Functional Reactive Programming의 줄임말이다. 아래와 같은 식이 성립한다고 볼 수 있다.

Functional Reactive Programming = Functional Programming + Reactive Programming

FRP = FP + RP

하나씩 개념을 간단히 알아보자.

> 아래 정의는 뤼튼(https://wrtn.ai/)에서 GPT-4의 답변을 기반으로 작성되었다.

### FP

함수형 프로그래밍은 프로그래밍의 한 패러다임으로, 계산을 수학적 함수의 평가로 취급하고 상태와 변경 가능한 데이터를 피하는 방식이다. 이는 코드를 더 간결하고 예측 가능하게 만들며, 디버깅과 테스팅을 용이하게 한다.

> 순수함수를 사용
> 순수함수 : 사이드 이펙트가 없다. map, filter, reduce 등

### RP

반응형 프로그래밍은 데이터 흐름과 변화의 전파에 중점을 둔 프로그래밍 패러다임이다. 이는 데이터의 변화를 감지하고 이에 반응하여 적절한 동작을 수행하도록 시스템을 구성한다. 이를 통해 비동기 데이터 흐름을 효과적으로 처리할 수 있다.

> 스트림을 통해 데이터를 비동기로 처리

### FRP

함수형 반응형 프로그래밍(FRP)은 함수형 프로그래밍과 반응형 프로그래밍의 특징을 결합한 프로그래밍 패러다임이다. 시간에 따른 값의 변화를 모델링하고 이를 조작하는데 초점을 맞추며, 비동기 데이터 흐름과 사용자 입력 등의 이벤트를 효율적으로 처리할 수 있다.

> 스트림을 통해 데이터를 순수함수로 처리

## 백앤드에서 FRP를?

개념은 알겠는데 백앤드에서 데이터를 반응형으로 받는 부분이 생소했다. NestJS에서는 어떻게 데이터스트림을 구독할까? 이는 Interceptors 예제에서 확인할 수 있다.

### NestJS Interceptor

```ts
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
	intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
		console.log('Before...');

		const now = Date.now();
		return next.handle().pipe(tap(() => console.log(`After... ${Date.now() - now}ms`)));
	}
}
```

NestInterceptor 인터페이스의 intercept 메서드는 Observable을 반환한다. 함수의 두번째 인자인 CallHandler 객체의 handle 메서드는 Observable이기에 RxJS로 데이터를 처리할 수 있다.

### NestJS Controller

이는 일반적인 컨트롤러에서도 가능한데, NestJS 컨트롤러에서는 Promise나 Observable을 반환할 수 있다. Observable을 반환하면, 해당 Observable이 완료될 때까지 NestJS는 HTTP 응답을 자동으로 연기한다. 그런 다음 Observable이 값을 방출하면, 이 값이 HTTP 응답의 본문이 된다.

```ts
import { Controller, Get } from '@nestjs/common';
import { Observable, of } from 'rxjs';

@Controller('items')
export class ItemsController {
	@Get()
	findAll(): Observable<any[]> {
		return of([
			{ id: 1, name: 'Item 1' },
			{ id: 2, name: 'Item 2' }
		]);
	}
}
```

## 그래서 FRP를 어떻게 사용할까

그동안 모든 컨트롤러에서 당연한듯이 Promise를 반환했다. 이제 Observable을 반환할 수 있다는걸 알았지만 실무에서 어떻게 활용할진 아직 미지수다. 인터셉터에서만 관례적으로 사용한게 전부니까. 더 유용한 사용사례를 찾게 되면 후속 포스팅을 작성할 예정.
