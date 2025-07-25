import formsPlugin from "@tailwindcss/forms";
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    //     TailwindCSS 공식 플러그인
    // - @tailwindcss/typography
    // - @tailwindcss/forms
    // - @tailwindcss/aspect-ratio
    // - @tailwindcss/container-queries
    // https://github.com/tailwindlabs/tailwindcss-forms
    // tailwindcss/forms 테스트 : https://tailwindcss-forms.vercel.app
    formsPlugin, // or require("@tailwindcss/forms") 두가지 방식 중 선택
    // tailwindcss 타 플러그인 사용 시 해당 부분에서 추가 사용.
  ],
};
