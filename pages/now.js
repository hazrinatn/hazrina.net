import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function Now() {
  return (
    <div className="flex w-full flex-col justify-around">
      <PageSEO title={`Now - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div>
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            What I'm Doing Now
          </h1>
        </div>
        <div>
          <p>
            This is my{' '}
            <Link href={'https://nownownow.com/about'}>
              <a className="font-medium leading-6">"now"</a>
            </Link>{' '}
            page, inspired by Derek Sivers, where I share with you what I am currently working on
            and excited about. I try to update this monthly.
          </p>
          <p className="py-6 italic">Last updated: November 28, 2022</p>
        </div>
        <div>
          <h3 className="py-7 text-2xl font-bold leading-7">Web Development</h3>
          <p>
            After years of studying biology and working as a molecular biology researcher, I decided
            to pivot to become a web developer. It’s been a journey with so much challenges, but I’m
            excited to learn more and gain new skills. I’m currently making a bunch of websites and
            looking for clients to work with.{' '}
          </p>
        </div>
        <div>
          <h3 className="py-7 text-2xl font-bold leading-7">Coffe Chats</h3>
          <p>
            I’ve been shying away from networking despite fully knowing the benefit of doing so. But
            after rereading Alexey’s post about making friends online and cold emailing, I mustered
            up my courage to finally sent that email I wrote months ago but didn’t dare to send. One
            email lead to another and more. It’s nerve wrecking but I’m excited! So if you know
            someone who’s currently working in tech as web developer, please kindly introduce me to
            them. I’ll be delighted to have a virtual coffee chat with them ☕️
          </p>
        </div>
        <div>
          <h3 className="py-7 text-2xl font-bold leading-7">Language learning</h3>
          <p>
            I’m currently obsessed with Thai dramas and musics, and strive to learn the language to
            sing my favorite songs correctly and hopefully can enjoy the tv shows without subtitles.
            It’s been challenging because there is no space between words in Thai and each word can
            be read differently from left or right or up or bottom. To add onto it, Thai has five
            tones! Currently I know 17 consonants, 12 vowels, and 10-ish words, and getting super
            pumped adding new words on my Anki deck. I’ll share the deck when I finish adding words
            on it, in case you’re also interested to learn Thai 😄
          </p>
        </div>
        <div>
          <h3 className="py-7 text-2xl font-bold leading-7">Writing</h3>
          <p>
            I want to continue writing and sharing ideas. I shoot for three posts a month but I
            don’t beat myself if I fail.
          </p>
        </div>
        <div>
          <h3 className="py-7 text-2xl font-bold leading-7">Reading</h3>
          <p>
            I love reading essays/posts from{' '}
            <Link href={'http://paulgraham.com/'}>
              <a className="font-medium leading-6 underline">Paul Graham</a>
            </Link>
            ,{' '}
            <Link href={'https://guzey.com/'}>
              <a className="font-medium leading-6 underline">Alexey Guzey</a>
            </Link>
            ,{' '}
            <Link href={'http://www.alljapaneseallthetime.com/blog'}>
              <a className="font-medium leading-6 underline">Khatzumoto</a>
            </Link>
            ,{' '}
            <Link href={'https://benkuhn.net/'}>
              <a className="font-medium leading-6 underline">Ben Kuhn</a>
            </Link>
            , and many interesting people I found online. Nowadays I’m rereading posts from Alexey
            and Khatzumoto. I also find myself enjoying fictions more than I did for the last few
            years. Usually I opted for non-fictions every time I need inspiration or just chilling,
            but now I understand the charm of fictions and can appreciate it more.
          </p>
        </div>
      </div>
    </div>
  )
}
