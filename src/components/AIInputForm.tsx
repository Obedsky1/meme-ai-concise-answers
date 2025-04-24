
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MicIcon, FileUp, ThumbsUpIcon, ThumbsDownIcon, ChevronDown, SendIcon } from 'lucide-react';

type ResponseFormat = 'bullet-points' | 'one-word' | 'concise-paragraph';

const AIInputForm = () => {
  const [inputText, setInputText] = useState('');
  const [responseFormat, setResponseFormat] = useState<ResponseFormat>('bullet-points');
  const [isLoading, setIsLoading] = useState(false);
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  
  const mockResponses: Record<ResponseFormat, string> = {
    'bullet-points': "• First key point about your query\n• Second important insight\n• Final takeaway that matters",
    'one-word': "Essence",
    'concise-paragraph': "This is a concise answer to your question. It contains only the essential information in two short sentences."
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    
    setIsLoading(true);
    
    setTimeout(() => {
      setAiResponse(mockResponses[responseFormat]);
      setIsLoading(false);
    }, 1000);
  };
  
  const formatLabels: Record<ResponseFormat, string> = {
    'bullet-points': 'Bullet Points',
    'one-word': 'One Word',
    'concise-paragraph': 'Short Paragraph'
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-auto px-4 py-4 space-y-6">
        {aiResponse && (
          <div className="max-w-3xl mx-auto">
            <Card className="glass-morphism">
              <CardContent className="p-4 sm:p-6">
                <div className="prose prose-invert max-w-none">
                  <h3 className="text-sm text-muted-foreground uppercase mb-2">
                    Response ({responseFormat.replace('-', ' ')})
                  </h3>
                  <div className="whitespace-pre-line text-base leading-relaxed">
                    {aiResponse}
                  </div>
                  <div className="flex justify-end gap-2 mt-4">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => console.log('positive feedback')}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <ThumbsUpIcon className="h-4 w-4 mr-1" />
                      Helpful
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => console.log('negative feedback')}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <ThumbsDownIcon className="h-4 w-4 mr-1" />
                      Not Helpful
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      <div className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-4">
          <div className="relative">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="absolute left-2 top-2 gap-1 h-8 text-muted-foreground hover:text-foreground"
                >
                  {formatLabels[responseFormat]}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                {Object.entries(formatLabels).map(([key, label]) => (
                  <DropdownMenuItem 
                    key={key}
                    onClick={() => setResponseFormat(key as ResponseFormat)}
                  >
                    {label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="mt-12 sm:mt-0">
              <Textarea
                placeholder="Ask anything. I'll keep it straight to the point..."
                className="min-h-[100px] resize-none pl-4 pr-20 py-4 bg-background border-muted"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />
              
              <div className="absolute right-2 bottom-2 flex gap-2">
                <Button 
                  type="button" 
                  variant="ghost" 
                  size="icon" 
                  className="h-8 w-8"
                  title="Voice Input"
                >
                  <MicIcon className="h-4 w-4" />
                </Button>
                <Button 
                  type="button" 
                  variant="ghost" 
                  size="icon" 
                  className="h-8 w-8"
                  title="Upload File"
                >
                  <FileUp className="h-4 w-4" />
                </Button>
                <Button 
                  type="submit" 
                  size="icon"
                  className="h-8 w-8"
                  disabled={isLoading}
                >
                  <SendIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AIInputForm;
