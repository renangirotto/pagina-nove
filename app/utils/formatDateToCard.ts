export default function formatDateToCard(date: string | number) {
    const formatter = new Intl.DateTimeFormat("pt-BR", {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    });

    const dateFormatted = formatter.format(new Date(date)).replaceAll("de", "");

    return dateFormatted;
}
