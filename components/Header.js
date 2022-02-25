
   
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import BLOG from '@/blog.config'
import { useLocale } from '@/lib/locale'

const NavBar = () => {
  const locale = useLocale()
  const links = [
    { id: 0, name: locale.NAV.INDEX, to: BLOG.path || '/', show: true },
    { id: 1, name: locale.NAV.ABOUT, to: '/about', show: BLOG.showAbout },
    { id: 2, name: locale.NAV.RSS, to: '/feed', show: true },
    { id: 3, name: locale.NAV.SEARCH, to: '/search', show: true }
  ]
  return (
    <div className="flex-shrink-0">
      <ul className="flex flex-row">
        {links.map(
          link =>
            link.show && (
              <li
                key={link.id}
                className="block ml-4 text-black dark:text-gray-50 nav"
              >
                <Link href={link.to}>
                  <a>{link.name}</a>
                </Link>
              </li>
            )
        )}
      </ul>
    </div>
  )
}

const Header = ({ navBarTitle, fullWidth }) => {
  const useSticky = !BLOG.autoCollapsedNavBar
  const navRef = useRef(null)
  const sentinalRef = useRef([])
  const handler = ([entry]) => {
    if (navRef && navRef.current && useSticky) {
      if (!entry.isIntersecting && entry !== undefined) {
        navRef.current?.classList.add('sticky-nav-full')
      } else {
        navRef.current?.classList.remove('sticky-nav-full')
      }
    } else {
      navRef.current?.classList.add('remove-sticky')
    }
  }
  useEffect(() => {
    const obvserver = new window.IntersectionObserver(handler)
    obvserver.observe(sentinalRef.current)
    // Don't touch this, I have no idea how it works XD
    // return () => {
    //   if (sentinalRef.current) obvserver.unobserve(sentinalRef.current)
    // }
    /* eslint-disable-line */
  }, [sentinalRef])
  return (
    <>
      <div className="observer-element h-4 md:h-12" ref={sentinalRef}></div>
      <div
        className={`sticky-nav m-auto w-full h-6 flex flex-row justify-between items-center mb-2 md:mb-12 py-8 bg-opacity-60 ${
          !fullWidth ? 'max-w-3xl px-4' : 'px-4 md:px-24'
        }`}
        id="sticky-nav"
        ref={navRef}
      >
        <div className="flex items-center">
          <Link href="/">
            <a aria-label={BLOG.title}>
              <div className="h-6">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <mask
      id="a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={24}
      height={24}
    >
      <rect width={24} height={24} rx={1.234} fill="#C4C4C4" />
    </mask>
    <g mask="url(#a)">
      <g filter="url(#b)">
        <g filter="url(#c)">
          <rect
            x={7.063}
            y={7.2}
            width={6.56}
            height={13.097}
            rx={0.069}
            fill="url(#d)"
          />
          <rect
            x={7.097}
            y={7.234}
            width={6.491}
            height={13.029}
            rx={0.034}
            stroke="#000"
            strokeOpacity={0.18}
            strokeWidth={0.069}
            style={{
              mixBlendMode: "overlay",
            }}
          />
        </g>
      </g>
      <path
        fill="#2F80ED"
        d="M7.063 7.2h6.56v13.097h-6.56z"
        style={{
          mixBlendMode: "overlay",
        }}
      />
      <g filter="url(#e)">
        <g filter="url(#f)">
          <rect
            x={10.354}
            y={3.84}
            width={3.291}
            height={3.291}
            rx={0.069}
            fill="gray"
          />
          <rect
            x={10.389}
            y={3.874}
            width={3.223}
            height={3.223}
            rx={0.034}
            stroke="#000"
            strokeOpacity={0.18}
            strokeWidth={0.069}
            style={{
              mixBlendMode: "overlay",
            }}
          />
        </g>
      </g>
      <path
        fill="#2F80ED"
        d="M10.354 3.84h3.291v3.291h-3.291z"
        style={{
          mixBlendMode: "overlay",
        }}
      />
      <g filter="url(#g)">
        <path
          d="M13.691 7.131a6.583 6.583 0 0 1 6.583 6.583H13.69V7.131Z"
          fill="gray"
        />
        <path
          d="M13.725 7.166a6.549 6.549 0 0 1 6.515 6.514h-6.515V7.166Z"
          stroke="#000"
          strokeOpacity={0.35}
          strokeWidth={0.069}
          style={{
            mixBlendMode: "overlay",
          }}
        />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.691 7.131v6.583h6.583a6.583 6.583 0 0 0-6.583-6.583Z"
        fill="#2F80ED"
        style={{
          mixBlendMode: "overlay",
        }}
      />
      <g filter="url(#h)">
        <path
          d="M20.274 13.714a6.583 6.583 0 0 1-6.583 6.583v-6.583h6.583Z"
          fill="gray"
        />
        <path
          d="M20.24 13.748a6.549 6.549 0 0 1-6.515 6.515v-6.515h6.515Z"
          stroke="#000"
          strokeOpacity={0.35}
          strokeWidth={0.069}
          style={{
            mixBlendMode: "overlay",
          }}
        />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.274 13.714H13.69v6.583a6.583 6.583 0 0 0 6.583-6.583Z"
        fill="#2F80ED"
        style={{
          mixBlendMode: "overlay",
        }}
      />
      <g filter="url(#i)">
        <g filter="url(#j)">
          <rect
            x={7.063}
            y={3.84}
            width={3.291}
            height={3.291}
            rx={0.069}
            fill="url(#k)"
          />
          <rect
            x={7.097}
            y={3.874}
            width={3.223}
            height={3.223}
            rx={0.034}
            stroke="#000"
            strokeOpacity={0.18}
            strokeWidth={0.069}
            style={{
              mixBlendMode: "overlay",
            }}
          />
        </g>
      </g>
      <path
        fill="#FFCD03"
        d="M7.063 3.84h3.291v3.291H7.063z"
        style={{
          mixBlendMode: "overlay",
        }}
      />
    </g>
    <defs>
      <filter
        id="b"
        x={6.309}
        y={6.926}
        width={8.206}
        height={15.017}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={0.069} dy={0.274} />
        <feGaussianBlur stdDeviation={0.274} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.38 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_29_689" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={0.069} dy={0.823} />
        <feGaussianBlur stdDeviation={0.411} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.125 0" />
        <feBlend
          in2="effect1_dropShadow_29_689"
          result="effect2_dropShadow_29_689"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_29_689"
          result="shape"
        />
      </filter>
      <filter
        id="c"
        x={7.063}
        y={7.2}
        width={6.56}
        height={13.097}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={0.069} dy={0.069} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.12 0" />
        <feBlend in2="shape" result="effect1_innerShadow_29_689" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={-0.069} dy={-0.069} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
        <feBlend
          in2="effect1_innerShadow_29_689"
          result="effect2_innerShadow_29_689"
        />
      </filter>
      <filter
        id="e"
        x={9.943}
        y={3.566}
        width={4.389}
        height={4.389}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={0.137} dy={0.274} />
        <feGaussianBlur stdDeviation={0.274} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.38 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_29_689" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_29_689"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={0.137} dy={0.137} />
        <feGaussianBlur stdDeviation={0.034} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.18 0" />
        <feBlend in2="shape" result="effect2_innerShadow_29_689" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={-0.137} dy={-0.137} />
        <feGaussianBlur stdDeviation={0.034} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
        <feBlend
          in2="effect2_innerShadow_29_689"
          result="effect3_innerShadow_29_689"
        />
      </filter>
      <filter
        id="f"
        x={10.354}
        y={3.84}
        width={3.292}
        height={3.291}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={0.069} dy={0.069} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.12 0" />
        <feBlend in2="shape" result="effect1_innerShadow_29_689" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={-0.069} dy={-0.069} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
        <feBlend
          in2="effect1_innerShadow_29_689"
          result="effect2_innerShadow_29_689"
        />
      </filter>
      <filter
        id="g"
        x={12.937}
        y={7.063}
        width={8.229}
        height={8.297}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={0.274} />
        <feGaussianBlur stdDeviation={0.137} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_29_689" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={0.069} dy={0.823} />
        <feGaussianBlur stdDeviation={0.411} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.125 0" />
        <feBlend
          in2="effect1_dropShadow_29_689"
          result="effect2_dropShadow_29_689"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_29_689"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={0.137} dy={0.137} />
        <feGaussianBlur stdDeviation={0.034} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.22 0" />
        <feBlend in2="shape" result="effect3_innerShadow_29_689" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={-0.137} dy={-0.137} />
        <feGaussianBlur stdDeviation={0.034} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
        <feBlend
          in2="effect3_innerShadow_29_689"
          result="effect4_innerShadow_29_689"
        />
      </filter>
      <filter
        id="h"
        x={12.937}
        y={13.646}
        width={8.229}
        height={8.297}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={0.274} />
        <feGaussianBlur stdDeviation={0.137} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_29_689" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={0.069} dy={0.823} />
        <feGaussianBlur stdDeviation={0.411} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.125 0" />
        <feBlend
          in2="effect1_dropShadow_29_689"
          result="effect2_dropShadow_29_689"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_29_689"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={0.137} dy={0.137} />
        <feGaussianBlur stdDeviation={0.034} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.22 0" />
        <feBlend in2="shape" result="effect3_innerShadow_29_689" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={-0.137} dy={-0.137} />
        <feGaussianBlur stdDeviation={0.034} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
        <feBlend
          in2="effect3_innerShadow_29_689"
          result="effect4_innerShadow_29_689"
        />
      </filter>
      <filter
        id="i"
        x={6.652}
        y={3.566}
        width={4.389}
        height={4.389}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={0.137} dy={0.274} />
        <feGaussianBlur stdDeviation={0.274} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.38 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_29_689" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_29_689"
          result="shape"
        />
      </filter>
      <filter
        id="j"
        x={7.063}
        y={3.84}
        width={3.292}
        height={3.291}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={0.069} dy={0.069} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.12 0" />
        <feBlend in2="shape" result="effect1_innerShadow_29_689" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={-0.069} dy={-0.069} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
        <feBlend
          in2="effect1_innerShadow_29_689"
          result="effect2_innerShadow_29_689"
        />
      </filter>
      <pattern
        id="d"
        patternContentUnits="objectBoundingBox"
        width={0.502}
        height={0.251}
      >
        <use xlinkHref="#l" transform="scale(.00523 .00262)" />
      </pattern>
      <pattern
        id="k"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#l" transform="scale(.01042)" />
      </pattern>
      <image
        id="l"
        width={96}
        height={96}
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
)

export default SvgComponent

                >
                  <rect
                    width="24"
                    height="24"
                    className="fill-current text-black dark:text-white"
                  />
                  <rect width="24" height="24" fill="url(#paint0_radial)" />
                  <defs>
                    <radialGradient
                      id="paint0_radial"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="rotate(45) scale(39.598)"
                    >
                      <stop stopColor="#CFCFCF" stopOpacity="0.6" />
                      <stop offset="1" stopColor="#E9E9E9" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                </svg>
              </div>
            </a>
          </Link>
          {navBarTitle
            ? (
            <p className="ml-2 font-medium text-day dark:text-night header-name">
              {navBarTitle}
            </p>
              )
            : (
            <p className="ml-2 font-medium text-day dark:text-night header-name">
              {BLOG.title},{' '}
              <span className="font-normal">{BLOG.description}</span>
            </p>
              )}
        </div>
        <NavBar />
      </div>
    </>
  )
}

export default Header
