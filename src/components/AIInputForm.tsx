import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MicIcon, FileUp, ThumbsUpIcon, ThumbsDownIcon } from 'lucide-react';
import { useIsMobile } from "@/hooks/use-mobile";

// Response format types
type ResponseFormat = 'bullet-points' | 'one-word' | 'concise-paragraph';

const AIInputForm = () => {
  const [inputText, setInputText] = useState('');
  const [responseFormat, setResponseFormat] = useState<ResponseFormat>('bullet-points');
  const [isLoading, setIsLoading] = useState(false);
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const isMobile = useIsMobile();
  
  // Example responses based on format - in a real app these would come from the AI
  const mockResponses: Record<ResponseFormat, string> = {
    'bullet-points': "• First key point about your query\n• Second important insight\n• Final takeaway that matters",
    'one-word': "Essence",
    'concise-paragraph': "This is a concise answer to your question. It contains only the essential information in two short sentences."
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    
    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      setAiResponse(mockResponses[responseFormat]);
      setIsLoading(false);
    }, 1000);
  };
  
  const handleFormatChange = (format: string) => {
    setResponseFormat(format as ResponseFormat);
  };
  
  const handleFeedback = (isPositive: boolean) => {
    console.log(`User gave ${isPositive ? 'positive' : 'negative'} feedback`);
    // In a real app, this would send feedback data to a backend
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-2 sm:p-4">
      <Card className="glass-morphism overflow-hidden">
        <CardContent className="p-4 sm:p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Tabs defaultValue="bullet-points" onValueChange={handleFormatChange} className="w-full">
              <TabsList className={`grid ${isMobile ? 'grid-cols-1 gap-2' : 'grid-cols-3'} mb-4`}>
                <TabsTrigger value="bullet-points" className="data-[state=active]:bg-primary/20">
                  Bullet Points
                </TabsTrigger>
                <TabsTrigger value="one-word" className="data-[state=active]:bg-primary/20">
                  One Word
                </TabsTrigger>
                <TabsTrigger value="concise-paragraph" className="data-[state=active]:bg-primary/20">
                  Short Paragraph
                </TabsTrigger>
              </TabsList>
            </Tabs>
              
            <div className="relative">
              <Textarea
                placeholder="Ask anything. I'll keep it straight to the point..."
                className="min-h-[120px] bg-secondary/50 border-secondary resize-none text-base"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />
              
              <div className="flex gap-2 mt-4">
                <Button 
                  type="button" 
                  variant="outline" 
                  size="icon" 
                  title="Voice Input"
                  className="hover:bg-primary/20"
                >
                  <MicIcon className="h-4 w-4" />
                </Button>
                <Button 
                  type="button" 
                  variant="outline" 
                  size="icon" 
                  title="Upload File"
                  className="hover:bg-primary/20"
                >
                  <FileUp className="h-4 w-4" />
                </Button>
                <Button 
                  type="submit" 
                  className="ml-auto px-6" 
                  disabled={isLoading}
                >
                  {isLoading ? 'Thinking...' : 'Get Answer'}
                </Button>
              </div>
            </div>
          </form>
          
          {aiResponse && (
            <div className="mt-8 animate-fade-in space-y-4">
              <div className="bg-secondary/30 rounded-lg p-4">
                <div className="prose prose-invert max-w-none">
                  <h3 className="text-sm text-muted-foreground uppercase mb-2">
                    Response ({responseFormat.replace('-', ' ')})
                  </h3>
                  <div className="whitespace-pre-line text-base leading-relaxed">
                    {aiResponse}
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end gap-2">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => handleFeedback(true)}
                  className="text-muted-foreground hover:text-foreground hover:bg-primary/20"
                >
                  <ThumbsUpIcon className="h-4 w-4 mr-1" />
                  Helpful
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => handleFeedback(false)}
                  className="text-muted-foreground hover:text-foreground hover:bg-primary/20"
                >
                  <ThumbsDownIcon className="h-4 w-4 mr-1" />
                  Not Helpful
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AIInputForm;
