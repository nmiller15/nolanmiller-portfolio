import { SkillsList } from "./SkillsList";
import PropTypes from "prop-types";
import { format } from "date-fns";

export function BlogCard({ article }) {
  BlogCard.propTypes = {
    article: PropTypes.object.isRequired,
  };

  const { title, description, tag_list, published_at, url } = article;

  return (
    <a href={url} target="_blank">
      <div className="group relative mt-3 cursor-pointer rounded-lg p-3 text-white transition-all duration-200 hover:bg-surface-200">
        <i className="iconoir-arrow-up-right-square transition-scale absolute right-0 pr-3 text-2xl duration-200 group-hover:scale-110"></i>
        <h3 className="pr-5 text-lg font-semibold">{title}</h3>
        <h4 className="text-sm font-thin text-surface-400">{`${format(published_at, "MMM d, yyyy")} at ${format(published_at, "h:mm aaa")}`}</h4>
        <p className="pt-1 text-surface-500">{description}</p>
        <SkillsList skills={tag_list} />
      </div>
    </a>
  );
}
