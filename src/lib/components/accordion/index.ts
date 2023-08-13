import OriginalAccordion from './Accordion.svelte';
import OriginalItem from './Item.svelte';
import Title from './Title.svelte';
import Content from './Content.svelte';

const Accordion = OriginalAccordion as AccordionStatic;
Accordion.Item = OriginalItem as AccordionItemStatic;
Accordion.Item.Title = Title;
Accordion.Item.Content = Content;

export default Accordion;

export interface AccordionStatic {
	new (...args: ConstructorParameters<typeof OriginalAccordion>): OriginalAccordion;
	Item: AccordionItemStatic;
}

export interface AccordionItemStatic {
	new (...args: ConstructorParameters<typeof OriginalItem>): OriginalItem;
	Title: typeof Title;
	Content: typeof Content;
}
