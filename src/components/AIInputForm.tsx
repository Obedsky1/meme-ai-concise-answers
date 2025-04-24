
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MicIcon, FileUp, ThumbsUpIcon, ThumbsDownIcon } from 'lucide-react';

// Response format types
type ResponseFormat = 'bullet-points' | 'one-word' | 'concise-paragraph';

const AIInputForm = () => {
  const [inputText, setInputText] = useState('');
  const [responseFormat, setResponseFormat] = useState<ResponseFormat>('bullet-points');
  const [isLoading, setIsLoading] = useState(false);
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  
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
    <div className="w-full max-w-3xl mx-auto p-4">
      <Card className="glass-morphism overflow-hidden">
        <CardContent className="p-6">
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <Tabs defaultValue="bullet-points" onValueChange={handleFormatChange}>
                <TabsList className="grid grid-cols-3 mb-4">
                  <TabsTrigger value="bullet-points">Bullet Points</TabsTrigger>
                  <TabsTrigger value="one-word">One Word</TabsTrigger>
                  <TabsTrigger value="concise-paragraph">Short Paragraph</TabsTrigger>
                </TabsList>
              </Tabs>
              
              <Textarea
                placeholder="Ask anything. I'll keep it straight to the point..."
                className="min-h-[120px] bg-secondary/50 border-secondary"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />
              
              <div className="flex gap-2">
                <Button type="button" variant="outline" size="icon" title="Voice Input">
                  <MicIcon className="h-4 w-4" />
                </Button>
                <Button type="button" variant="outline" size="icon" title="Upload File">
                  <FileUp className="h-4 w-4" />
                </Button>
                <Button type="submit" className="ml-auto" disabled={isLoading}>
                  {isLoading ? 'Thinking...' : 'Get Answer'}
                </Button>
              </div>
            </div>
          </form>
          
          {aiResponse && (
            <div className="mt-8 animate-fade-in">
              <div className="bg-secondary/30 rounded-lg p-4">
                <div className="prose prose-invert max-w-none">
                  <h3 className="text-sm text-muted-foreground uppercase mb-2">
                    Response ({responseFormat.replace('-', ' ')})
                  </h3>
                  <div className="whitespace-pre-line">{aiResponse}</div>
                </div>
              </div>
              
              <div className="flex justify-end mt-2 gap-2">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => handleFeedback(true)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <ThumbsUpIcon className="h-4 w-4 mr-1" />
                  Helpful
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => handleFeedback(false)}
                  className="text-muted-foreground hover:text-foreground"
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
