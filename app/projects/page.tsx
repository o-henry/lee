import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  return (
    <>
    <div className="mx-8">
            <div className="blog-post">
                <pre
                    className="language-typescript"
                    style={{ backgroundColor: "#282c35" }}
                >
                    <code className="language-typescript">
                     <br />
                     <h1
                            className='font-sequel'
                            style={{
                                color: "white",
                                fontSize: "2rem"
                            }}
                        >
                            PROJET LISTS
                        </h1>
                        
                        <br />
                        <br />
                        <br />
                        <Tag /> <Cmd>I can do these things ... </Cmd>
                        <br />
                        <span style={{ color: "white", fontSize: "0.9rem"}} className="font-locus">
                            스위프트 · 타입스크립트 · 리액트 · 노드
                        </span>
                        <br />
                        <br />
                        <br />
                        <Tag /> <Cmd>A little bit of ... </Cmd>
                        <br />
                        <span style={{color:"white",fontSize: "0.9rem"}} className="font-locus" >파이썬 · 코틀린</span>
                        <br />
                        <br />
                        <br />
                        <Tag /> <Cmd>git remote -v</Cmd>
                        <br />
                        <Prod link="https://github.com/o-henry">
                            https://github.com/o-henry
                        </Prod>
                        <br />
                        <br />
                        <br />
                        <PTag /><Cmd> SWIFTUI_APP</Cmd>
                        <br />
                        <Prod link="https://apps.apple.com/kr/app/%EB%85%B8%ED%81%AC-%EC%9E%A5%EC%86%8C-%EC%A7%88%EB%AC%B8-%EB%8B%B5%EB%B3%80-%EC%86%8C%ED%86%B5/id6670785828">
                           <span className="font-locus" style={{ fontSize: "0.9rem" }}>○ 노크</span>
                        </Prod>
                        <br />
                        <span className="font-locus" style={{ fontSize: "0.7rem", color: "skyblue"}}>   - SwiftUI · MVVM · notification · OAuth · GeoHash · Firebase</span>
                        <br />
                        <br />
                        <br />
                        <PTag /><Cmd> REACT_WEB_APP</Cmd>
                        <br />
                        <Prod link="https://youtu.be/tvFPEwrtKao">
                            <span className="font-locus" style={{ fontSize: "0.9rem" }}>○ 옥션 </span>
                        </Prod>
                        <br />
                        <Prod link="https://youtu.be/L5u7KgX1P4o">
                            <span className="font-locus" style={{ fontSize: "0.9rem" }}>○ 오늘의집_과제</span>
                        </Prod>
                        <br />
                        <Prod link="https://youtu.be/vV-hFzdlYyU">
                            <span className="font-locus" style={{ fontSize: "0.9rem" }}>○ 데비시스터즈_과제</span>
                        </Prod>
                        <br />
                        <br />
                        <br />
                        <PTag /><Cmd> REACT_NATIVE</Cmd>
                        <br />
                        <Prod link="https://youtu.be/LkqD32oWN20">
                            <span className="font-locus" style={{ fontSize: "0.9rem" }}>○ 인스타_크롤링_앱</span>
                        </Prod>
                        <br />
                        <br />
                        <br />
                        <PTag /><Cmd> TEAM_PROJECT</Cmd>
                        <br />
                        <Prod link="https://youtu.be/nv3lNBxKLmY">
                          <span className="font-locus" style={{ fontSize: "0.9rem" }}>○ flappy bird</span>
                        </Prod>
                        <br />
                        <br />
                        <br />
                        <PTag /><Cmd> NPM_PACKAGE</Cmd>
                        <br />
                        <Prod link="https://www.npmjs.com/package/visual-box">
                          <span className="font-locus" style={{ fontSize: "0.9rem" }}>○ box</span>
                        </Prod>
                        <br />
                        <br />
                        <br />

                        <PTag /><Cmd> CHROME_EXTENSION</Cmd>
                        <br />
                        <Prod link="https://chrome.google.com/webstore/detail/hidetwitch/ihefbdnchlbbmhbecinobdelbijcchka">
                            <span className="font-locus" style={{ fontSize: "0.9rem" }}>○ block</span>
                        </Prod>
                        <br />
                        <br />
                        <br />
                        <PTag /><Cmd> CORP</Cmd>
                        <br />
                        <Prod link="https://youtu.be/s5gBXg1zrHY">
                            <span className="font-locus" style={{ fontSize: "0.9rem" }}>○ papaya</span>
                        </Prod>
                        <br />
                        <span className="font-locus" style={{ fontSize: "0.7rem", color: "skyblue" }}>   - 반응형_웹을 활용한 모바일_화면적용</span>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                    </code>
                </pre>
            </div>
        </div> 
    </>
  )
}

function Tag() {
  return (
      <span
          style={{
              color: "#7BBED2",
              // fontFamily: "PT Mono",
              fontSize: "13px",
              opacity: ".6",
              fontFamily: "DM Mono",
          }}
      >
          ~/henry's/log
          <span
              style={{
                  color: "#6EF17D",
                  // fontFamily: "PT Mono",
                  fontFamily: "DM Mono",
              }}
          >
              {" "}
              @master &gt;
          </span>
      </span>
  );
}

function Cmd({ children }) {
  return (
      <span
          style={{
              color: "orange",
              // fontFamily: "PT Mono",
            //   opacity: "1",
              fontSize: "13px",
              fontFamily: "DM Mono",
          }}
      >
          {children}
      </span>
  );
}

function Prod({ children, link }) {
  return (
      <span>
          <a
              href={link}
              target="_blank"
              style={{
                  fontSize: "14px",
                  color: "#F5CF80",
                  // fontFamily: "Anonymous Pro",
                  fontFamily: "DM Mono",
              }}
          >
              {children}
          </a>
      </span>
  );
}

function PTag() {
  return (
      <span
          style={{
              color: "#7BBED2",
              opacity: ".6",
              fontFamily: "DM Mono",
              fontSize: "13px"
          }}
      >
          ~/henry's/log/projects
          <span
              style={{
                  fontSize: "13px",
                  color: "#6EF17D",
                  opacity: ".6",
                  fontFamily: "DM Mono",
              }}
          >
              {" "}
              @master &gt;
          </span>
      </span>
  );
}
