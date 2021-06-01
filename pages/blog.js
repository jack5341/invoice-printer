import LinkStack from "../components/shared-components/link-stack";
import IconList from "../components/shared-components/icon-list";

import { getPostConstants, getLinkConstants } from "../utils/getConsts";
export async function getStaticProps() {
  return {
    props: {
      posts: getPostConstants(),
      links: getLinkConstants(),
    },
  };
}

export default function Blog(props) {
  return (
    <>
      <div className="container">
        <div className="card-lg h-screen w-full md:w-1/2 overflow-auto">
          <LinkStack />
          <p className="subject mt-5 text-3xl md:text-6xl">Blog</p>
          <div className="text-left my-3">
            <p>
              Subject
            </p>
            <p className="text-xs md:text-base max-h-9 overflow-hidden">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              ipsa.Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Itaque, ipsa. Lorem ipsum
            </p>
          </div>
          {/* {props.posts.map((e, key) => (
            <div key={key} className="flex flex-row max-h-screen">
              <div className="m-2 p-4 shadow-sm duration-150 hover:bg-gray-200 rounded w-full text-left cursor-pointer">
                <img
                  src={e.thumb}
                  className="w-full rounded h-auto"
                  alt="blog-image"
                />
                <p className="text-base md:text-3xl mt-4 text-black">
                  {e.subject}{" "}
                  <span className="float-right m-1 text-xs md:text-base"> {e.date} </span>{" "}
                </p>
                <p className="mt-3 float-left max-h-11 overflow-hidden text-xs md:text-base">
                  {e.content}
                </p>
              </div>
            </div>
          ))} */}
          <IconList links={props.links} />
        </div>
      </div>
    </>
  );
}
