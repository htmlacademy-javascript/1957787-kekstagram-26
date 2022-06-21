const DESCRIPTIONS = [
  'Отправь это селфи в NASA, потому что ты звезда⭐',
  'Этот взгляд заслуживает аплодисментов👏👏👏',
  'Люблю тебя до 🌗 и обратно.',
  'Мне кажется, что знаю тебя всю жизнь💕',
  'Вау, ты прекрасно выглядишь👏💐',
  'Это лучшее, что я видел за последнее время😍😍😍',
  'Именно поэтому я подписан на тебя😉',
  'Как ты выглядишь так хорошо каждый день?😯',
  'Я думаю, так выглядят ангелы👼',
  'Улыбка на миллион долларов😃',
  'Твоя единственная улыбка может сделать мой день😃',
  'Вы могли бы стать профессиональной моделью💃',
  'Хм, выглядеть так должно быть незаконно🚔🚔🚔',
  'Это фото огонь🔥🔥🔥',
  'Красота фотографии не имеет границ💔',
  'Сразу видно, что есть чувство стиля👏',
  'Тебе можно позавидовать💭💭💭',
  'Это фотография сделала мой день🙌👍👍',
  'Это фото может стать эталоном🎀',
  'Ничто не сияет ярче☀️☀️☀️',
  'Вы профессиональный фотограф?📷',
  'Круто!👏🏻👍🏻',
  'Фееричная фотка✨',
  'Выглядит вкусно😋😋😋',
  'Wooow!🌟🌟🌟'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Егор', 'Алексей', 'Иван', 'Ирина', 'Василий', 'Максим', 'Юлия', 'Владимир', 'Кирилл', 'Михаил', 'Виктор'
];

const MIN_LIKES = 15;
const MAX_LIKES = 200;

const MIN_AVATAR_ID = 1;
const MAX_AVATAR_ID = 6;

const MAX_OBJECTS = 25;

const uniqueID = (function() {
  let id = 0;
  return function() { return id++; };
})();

// eslint-disable-next-line no-unused-vars
const multipleObject = () => generatePhotos(MAX_OBJECTS);

// eslint-disable-next-line no-unused-vars
function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function maxLenStr(str, maxLen)
{
  return str.length <= maxLen;
}

maxLenStr('', 1);

// Функция возвращает один объект комментрария
function createComment () {
  const comment = {
    id: uniqueID(),
    avatar: `img/avatar-${getRandomPositiveInteger(MIN_AVATAR_ID, MAX_AVATAR_ID)}.svg`,
    // eslint-disable-next-line no-undef
    message: getRandomArrayElement(MESSAGES),
    // eslint-disable-next-line no-undef
    name: getRandomArrayElement(NAMES)
  };
  return comment;
}

// Создаем массив из объектов комментариев
function createComments(countComments) {
  const comments = [];
  for (let i = 0; i < countComments; i++) {
    comments.push(createComment());
  }
  return comments;
}

function generatePhotos(countPhoto) {
  const photos = [];
  for (let i = 0; i < countPhoto; i++) {
    photos.push({
      id: i + 1,
      url: `photos/${i + 1}.jpg`,
      // eslint-disable-next-line no-undef
      description: getRandomArrayElement(DESCRIPTIONS),
      likes: getRandomPositiveInteger(MIN_LIKES, MAX_LIKES),
      comments: createComments(getRandomPositiveInteger(1, 4))
    });
  }
  return photos;
}


