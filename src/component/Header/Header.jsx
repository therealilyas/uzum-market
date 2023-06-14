import "./header.css";
function Header() {
  return (
    <div className="header">
      <ul className="location">
        <li className="city">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            id="compass-icon"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7 11C7 8.23858 9.23858 6 12 6C14.7614 6 17 8.23858 17 11C17 13.2317 15.8079 15.2429 14.5153 16.7262C13.8738 17.4623 13.2212 18.0525 12.7097 18.4561C12.4536 18.6582 12.2375 18.8098 12.0802 18.9082C12.0504 18.9268 12.0237 18.9429 12 18.9567C11.9763 18.9429 11.9496 18.9268 11.9198 18.9082C11.7625 18.8098 11.5464 18.6582 11.2903 18.4561C10.7788 18.0525 10.1262 17.4623 9.48471 16.7262C8.19208 15.2429 7 13.2317 7 11ZM12 5C8.68629 5 6 7.68629 6 11C6 13.5808 7.36827 15.8196 8.73081 17.3832C9.41691 18.1705 10.1156 18.803 10.6709 19.2411C10.9482 19.46 11.1944 19.634 11.3897 19.7561C11.4866 19.8167 11.5778 19.8688 11.6582 19.9076C11.6982 19.9269 11.7428 19.9465 11.7889 19.9623C11.8251 19.9747 11.9044 20 12 20C12.0956 20 12.1749 19.9747 12.2111 19.9623C12.2572 19.9465 12.3018 19.9269 12.3418 19.9076C12.4222 19.8688 12.5134 19.8167 12.6103 19.7561C12.8056 19.634 13.0518 19.46 13.3291 19.2411C13.8844 18.803 14.5831 18.1705 15.2692 17.3832C16.6317 15.8196 18 13.5808 18 11C18 7.68629 15.3137 5 12 5ZM11 11C11 10.4477 11.4477 10 12 10C12.5523 10 13 10.4477 13 11C13 11.5523 12.5523 12 12 12C11.4477 12 11 11.5523 11 11ZM12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9Z"
              fill="#141415"
            ></path>
          </svg>
          <p>
            Город:
            <span>Ташкент</span>
          </p>
        </li>
        <li className="delivery-point">
          <a href="#">Пункты выдачи</a>
        </li>
      </ul>
      <div>
        <p className="main-usp">
          Доставим ваш заказ бесплатно — всего за 1 день!
        </p>
      </div>
      <ul className="top-links">
        <li>
          <a href="/ru/faq" className="faq">
            Вопрос-ответ
          </a>
        </li>
        <li>
          <span className="my-orders">Мои заказы</span>
        </li>
        <li className="languages">
          <img
            className="languages__icon"
            src="https://static.vecteezy.com/system/resources/previews/016/328/914/original/russia-flat-rounded-flag-icon-with-transparent-background-free-png.png"
            alt="ru"
          />
          <span className="languages__lang">Русский</span>
        </li>
      </ul>
    </div>
  );
}

export default Header;
