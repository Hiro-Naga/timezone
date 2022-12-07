import moment from "moment-timezone";

export function TimeZone() {
  const date = new Date();
  return (
    <>
      <div>
        <h3>js only</h3>
        <div>Today: {date.toString()}</div>
        <div>JP: {date.toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })}</div>
      </div>

      <div>
        <h3>moment.js</h3>
        <div>Today: {moment().format()}</div>
        <div>timezone-ja: {moment(date).tz('Asia/Tokyo').format()}</div>
      </div>
      
      結局'Asia/Tokyo'の形で渡す必要があったらしい
    </>
  );
}
