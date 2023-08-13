import OriginalPost from './Post.svelte';
import OriginalHeader from './Header.svelte';
import Creator from './Creator.svelte';
import Created from './Created.svelte';
import Content from './Content.svelte';
import Images from './Images.svelte';
import Status from './Status.svelte';
import OriginalActions from './Actions.svelte';
import OriginalAction from './Action.svelte';
import Avatar from './Avatar.svelte';
import Icon from './Icon.svelte';
import Label from './Label.svelte';

const Post = OriginalPost as PostStatic;
Post.Header = OriginalHeader as PostHeaderStatic;
Post.Header.Avatar = Avatar;
Post.Header.Creator = Creator;
Post.Header.Created = Created;
Post.Content = Content;
Post.Images = Images;
Post.Status = Status;
Post.Actions = OriginalActions as PostActionsStatic;
Post.Actions.Action = OriginalAction as ActionStatic;
Post.Actions.Action.Icon = Icon;
Post.Actions.Action.Label = Label;

export default Post;

export interface PostStatic {
	new (...args: ConstructorParameters<typeof OriginalPost>): OriginalPost;
	Header: PostHeaderStatic;
	Content: typeof Content;
	Images: typeof Images;
	Status: typeof Status;
	Actions: PostActionsStatic;
}
export interface PostHeaderStatic {
	new (...args: ConstructorParameters<typeof OriginalHeader>): OriginalHeader;
	Avatar: typeof Avatar;
	Creator: typeof Creator;
	Created: typeof Created;
}
export interface PostActionsStatic {
	new (...args: ConstructorParameters<typeof OriginalActions>): OriginalActions;
	Action: ActionStatic;
}

export interface ActionStatic {
	new (...args: ConstructorParameters<typeof OriginalAction>): OriginalAction;
	Icon: typeof Icon;
	Label: typeof Label;
}
