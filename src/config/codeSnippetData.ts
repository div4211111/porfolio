export interface ICodeSnippetData {
  type: string;
  code: string;
  avatar: string;
  username: string;
  createdAt: string;
  details: Record<LanguagesType, string>;
}

export type LanguagesType = "en" | "ru";

export const codeSnippetDate: ICodeSnippetData[] = [
  {
    type: "typescript",
    code: `export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode;
  typeStyle: "ghost" | "primary" | "reset" | "light";
  loading?: boolean;
}`,
    avatar: "/avatar.webp",
    username: "Div4211111",
    createdAt: "21.01.2022",
    details: {
      en: `This TypeScript code defines an interface ButtonProps that extends the ButtonHTMLAttributes interface provided by React, adding additional properties for the typeStyle of the button (which can be one of four string literals) and an optional loading boolean flag, and also specifies that the children property should be a React node.`,
      ru: "Этот код TypeScript определяет интерфейс ButtonProps, который расширяет интерфейс ButtonHTMLAttributes, предоставляемый React, добавляя дополнительные свойства для typeStyle кнопки (который может быть одним из четырех строковых литералов) и необязательный булев флаг загрузки, а также указывает, что свойство children должно быть узлом React.",
    },
  },
  {
    type: "typescript",
    code: `export function RefreshTokenSwagger() {
    return applyDecorators(
        ApiOperation({ summary: 'Renew access token' }),
        ApiCreatedResponse({
            description: 'You have successfully updated your access token',
            type: UserAndTokenResponse,
        }),
        ApiUnprocessableEntityResponse({
            description: 'Unable to renew access token',
            type: ErrorResponse,
        }),
        ApiUnauthorizedResponse({
            description: 'You are not logged in or you do not have access',
            type: ErrorResponse,
        }),
        ApiBearerAuth(),
    );
}`,
    avatar: "/avatar.webp",
    username: "Div4211111",
    createdAt: "26.02.2022",
    details: {
      en: "This TypeScript code defines a function RefreshTokenSwagger() that applies a set of decorators from the NestJS framework to a route handler function, including ApiOperation, ApiCreatedResponse, ApiUnprocessableEntityResponse, and ApiBearerAuth. These decorators provide Swagger documentation for the API route and specify the expected responses for successful and unsuccessful requests.",
      ru: "Этот код TypeScript определяет функцию RefreshTokenSwagger(), которая применяет набор декораторов из фреймворка NestJS к функции обработчика маршрута, включая ApiOperation, ApiCreatedResponse, ApiUnprocessableEntityResponse и ApiBearerAuth. Эти декораторы предоставляют документацию Swagger для маршрута API и указывают ожидаемые ответы для успешных и неуспешных запросов.",
    },
  },
  {
    type: "typescript",
    code: `type ScrollCallback = (event: Event) => void;

const useOnWindowScroll = (callback: ScrollCallback) => {
  const listener = useRef<ScrollCallback | null>(null);

  useEffect(() => {
    if (listener.current) window.removeEventListener("scroll", listener.current);

    listener.current = (event: Event) => callback(event);
    window.addEventListener("scroll", listener.current);

    return () => {
      if (listener.current) window.removeEventListener("scroll", listener.current);
    };
  }, [callback]);
};`,
    avatar: "/avatar.webp",
    username: "Div4211111",
    createdAt: "04.03.2022",
    details: {
      en: "The `useOnWindowScroll` hook is a reusable React hook that allows you to execute a callback function when the user scrolls the window, and automatically removes the event listener when the component unmounts.",
      ru: "Хук `useOnWindowScroll` - это многоразовый хук React, который позволяет выполнять функцию обратного вызова, когда пользователь прокручивает окно, и автоматически удаляет слушателя события, когда компонент размонтируется.",
    },
  },
];
