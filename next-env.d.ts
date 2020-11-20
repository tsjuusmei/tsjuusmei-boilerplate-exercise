/// <reference types="next" />
/// <reference types="next/types/global" />

declare module '*.scss' {
  const styles: { [key: string]: string}
  export default styles
}
