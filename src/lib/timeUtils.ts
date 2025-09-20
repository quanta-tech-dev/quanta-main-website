// Helper function to calculate relative time
export const getRelativeTime = (dateString: string): string => {
  const now = new Date();
  const date = new Date(dateString);
  const diffInMs = now.getTime() - date.getTime();
  const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);
  const diffInWeeks = Math.floor(diffInDays / 7);
  const diffInMonths = Math.floor(diffInDays / 30);
  const diffInYears = Math.floor(diffInDays / 365);

  if (diffInMinutes < 1) return 'just now';
  if (diffInMinutes < 60) return `${diffInMinutes} min ago`;
  if (diffInHours < 24) return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
  if (diffInDays < 7) return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
  if (diffInWeeks < 4) return `${diffInWeeks} week${diffInWeeks > 1 ? 's' : ''} ago`;
  if (diffInMonths < 12) return `${diffInMonths} month${diffInMonths > 1 ? 's' : ''} ago`;
  return `${diffInYears} year${diffInYears > 1 ? 's' : ''} ago`;
};

// Helper function to calculate reading time
export const calculateReadingTime = (content: { blocks?: Array<{ type: string; data?: { text?: string; items?: string[] } }> }): number => {
  if (!content || !content.blocks) return 1;

  let wordCount = 0;
  content.blocks.forEach((block: { type: string; data?: { text?: string; items?: string[] } }) => {
    if (block.type === 'paragraph' && block.data?.text) {
      // Remove HTML tags and count words
      const textOnly = block.data.text.replace(/<[^>]*>/g, '');
      wordCount += textOnly.split(/\s+/).filter(word => word.length > 0).length;
    }
    if (block.type === 'header' && block.data?.text) {
      const textOnly = block.data.text.replace(/<[^>]*>/g, '');
      wordCount += textOnly.split(/\s+/).filter(word => word.length > 0).length;
    }
    if (block.type === 'list' && block.data?.items) {
      block.data.items.forEach((item: string) => {
        wordCount += item.split(/\s+/).filter(word => word.length > 0).length;
      });
    }
  });

  // Average reading speed is 200 words per minute
  const readingTimeMinutes = Math.ceil(wordCount / 200);
  return readingTimeMinutes < 1 ? 1 : readingTimeMinutes;
};