import { lazy } from "react";
export const ContactPageAsync = lazy(() => import("./Contact"));

// export const ContactPageAsync = lazy(
//   () =>
//     new Promise((resolve) => {
//       // @ts-ignore
//       // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
//       setTimeout(() => resolve(import("./Contact")), 1500);
//     })
// );
