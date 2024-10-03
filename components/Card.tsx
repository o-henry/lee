"use client";
import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, href }) => (
    <div className="col-sm-6">  
      <div className="py-4 d-flex flex-column featured-bottom-article">
        {
          imgSrc &&
           (href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              <Image
                alt={title}
                src={imgSrc}
                className="d-block col-12 position-relative rounded-2 mb-4 overflow-hidden tease-thumbnail"
                width={544}
                height={306}
              />
            </Link>
           ): <Image
                alt={title}
                src={imgSrc}
                className="d-block col-12 position-relative rounded-2 mb-4 overflow-hidden tease-thumbnail"
                width={544}
                height={306}
              />
            )
        }
      </div>
    </div>
  // <div className="md max-w-[544px] p-4 md:w-1/2">
  //   <div
  //     className={`${
  //       imgSrc && 'h-full'
  //     } rounded-lg`}
  //   >
  //     {imgSrc &&
  //       (href ? (
  //         <Link href={href} aria-label={`Link to ${title}`}>
  //           <Image
  //             alt={title}
  //             src={imgSrc}
  //             className="object-cover object-center md:h-36 lg:h-48"
  //             width={544}
  //             height={306}
  //           />
  //         </Link>
  //       ) : (
  //         <Image
  //           alt={title}
  //           src={imgSrc}
  //           className="object-cover object-center md:h-36 lg:h-48"
  //           width={544}
  //           height={306}
  //         />
  //       ))}
  //     <div className="p-6">
  //       <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
  //         {href ? (
  //           <Link href={href} aria-label={`Link to ${title}`}>
  //             {title}
  //           </Link>
  //         ) : (
  //           title
  //         )}
  //       </h2>
  //       <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
  //       {href && (
  //         <Link
  //           href={href}
  //           className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
  //           aria-label={`Link to ${title}`}
  //         >
  //           Learn more &rarr;
  //         </Link>
  //       )}
  //     </div>
  //   </div>
  // </div>
)

export default Card
